-- Users table (modified)
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY DEFAULT (hex(randomblob(8))),
    github_id INTEGER UNIQUE,
    email TEXT,
    username TEXT UNIQUE,
    name TEXT,
    avatar_url TEXT,
    bio TEXT,
    location TEXT,
    twitter TEXT,
    company TEXT,
    website TEXT,
    role INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (role) REFERENCES roles(id)
);

-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY,
    user_id TEXT NOT NULL,
    session_token TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS user_id_idx ON sessions(user_id);

-- Roles table
CREATE TABLE IF NOT EXISTS roles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    value TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    active BOOLEAN NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Conferences table
CREATE TABLE IF NOT EXISTS conferences (
    id TEXT PRIMARY KEY DEFAULT (hex(randomblob(8))),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    venue TEXT,
    address TEXT,
    city TEXT,
    country TEXT,
    timezone TEXT,
    website TEXT,
    logo_url TEXT,
    banner_url TEXT,
    is_active BOOLEAN DEFAULT true,
    max_attendees INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Talks table
CREATE TABLE IF NOT EXISTS talks (
    id TEXT PRIMARY KEY DEFAULT (hex(randomblob(8))),
    conference_id TEXT NOT NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT,
    abstract TEXT,
    level TEXT CHECK(level IN ('beginner', 'intermediate', 'advanced')),
    duration INTEGER, -- in minutes
    scheduled_at TIMESTAMP,
    room TEXT,
    status TEXT CHECK(status IN ('draft', 'submitted', 'accepted', 'rejected', 'confirmed')),
    slides_url TEXT,
    recording_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conference_id) REFERENCES conferences(id),
    UNIQUE(conference_id, slug)
);

-- Sponsors table
CREATE TABLE IF NOT EXISTS sponsors (
    id TEXT PRIMARY KEY DEFAULT (hex(randomblob(8))),
    name TEXT NOT NULL,
    description TEXT,
    website TEXT,
    logo_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Conference Sponsors junction table (with sponsorship levels)
CREATE TABLE IF NOT EXISTS conference_sponsors (
    conference_id TEXT NOT NULL,
    sponsor_id TEXT NOT NULL,
    level TEXT CHECK(level IN ('platinum', 'gold', 'silver', 'bronze', 'other')),
    amount DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (conference_id, sponsor_id),
    FOREIGN KEY (conference_id) REFERENCES conferences(id),
    FOREIGN KEY (sponsor_id) REFERENCES sponsors(id)
);

-- Talk Speakers junction table
CREATE TABLE IF NOT EXISTS talk_users (
    talk_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    is_main_speaker BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (talk_id, user_id),
    FOREIGN KEY (talk_id) REFERENCES talks(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_talks_conference ON talks(conference_id);
CREATE INDEX IF NOT EXISTS idx_conference_sponsors_sponsor ON conference_sponsors(sponsor_id);
CREATE INDEX IF NOT EXISTS idx_talk_speakers_user ON talk_users(user_id);
