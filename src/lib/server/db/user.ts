import { db } from "./index";

interface GitHubUserInfo {
	id: number;
	email?: string;
	name?: string;
	login: string;
	avatar_url?: string;
	bio?: string;
	location?: string;
	twitter_username?: string;
}

export interface User {
	id: string;
	github_id: number;
	email: string | null;
	username: string;
	name: string | null;
	avatar_url: string | null;
	bio: string | null;
	location: string | null;
	twitter: string | null;
	role: number;
}

export const get_user = (id: number): User | undefined => {
	const stmt = db.prepare(`
      SELECT * FROM users
      WHERE id = $id
    `);

	try {
		return stmt.get({ id: id }) as User;
	} catch (error) {
		console.error("Error getting user:", error);
		return undefined;
	}
};
