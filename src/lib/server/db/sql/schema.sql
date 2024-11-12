-- Sponsors table
CREATE TABLE IF NOT EXISTS sponsors (
    id TEXT PRIMARY KEY DEFAULT (hex(randomblob(8))),
    name TEXT NOT NULL,
    website_url TEXT NOT NULL,
    type TEXT CHECK(type IN ('platinum', 'gold', 'silver', 'meetball', 'partner')),
    logo_url TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Conferences table
CREATE TABLE IF NOT EXISTS conferences (
    id TEXT PRIMARY KEY DEFAULT (hex(randomblob(8))),
    name TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    year INTEGER NOT NULL,
    season TEXT CHECK(season IN ('spring', 'summer', 'fall', 'winter')),
    date DATE,
    type TEXT CHECK(type IN ('virtual', 'in-person')) NOT NULL,
    speaker_status TEXT CHECK(speaker_status IN ('cfp_open', 'cfp_closed', 'show_speakers', 'videos_ready')),
    youtube_id TEXT,
    is_active BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Talks table
CREATE TABLE IF NOT EXISTS talks (
    id TEXT PRIMARY KEY DEFAULT (hex(randomblob(8))),
    conference_id TEXT NOT NULL REFERENCES conferences(id),
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT,
    status TEXT CHECK(status IN ('accepted', 'reviewing', 'rejected')),
    youtube_id TEXT,
    format TEXT CHECK(format IN ('regular', 'lightning')),
    level TEXT CHECK(level IN ('beginner', 'intermediate', 'advanced')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Conference Sponsors junction table
CREATE TABLE IF NOT EXISTS conference_sponsors (
    conferences_id TEXT NOT NULL REFERENCES conferences(id),
    sponsors_id TEXT NOT NULL REFERENCES sponsors(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (conference_id, sponsor_id)
);
CREATE TABLE IF NOT EXISTS roles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    value TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    active BOOLEAN NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

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

CREATE TABLE IF NOT EXISTS talk_users (
    talk_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    is_main_speaker BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (talk_id, user_id),
    FOREIGN KEY (talk_id) REFERENCES talks(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS sessions (
   user_id TEXT NOT NULL,
   session_token TEXT NOT NULL PRIMARY KEY,
   expires_at TEXT NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS user_id_idx ON sessions(user_id);
