import type { Database } from 'bun:sqlite';

export type SelectConferenceResult = {
	id: string;
	title: string;
	subtitle: string;
	year: number;
	season?: 'spring' | 'summer' | 'fall' | 'winter';
	date?: number;
	type: 'virtual' | 'in-person';
	speaker_status?: 'cfp_open' | 'cfp_closed' | 'show_speakers' | 'videos_ready';
	youtube_id?: string;
	is_active?: number;
	created_at?: number;
	updated_at?: number;
}

export function selectConference(db: Database): SelectConferenceResult[] {
	const sql = `
	SELECT * FROM conferences;
	
	`
	return db.prepare(sql)
		.values()
		.map(data => mapArrayToSelectConferenceResult(data));
}

function mapArrayToSelectConferenceResult(data: any) {
	const result: SelectConferenceResult = {
		id: data[0],
		title: data[1],
		subtitle: data[2],
		year: data[3],
		season: data[4],
		date: data[5],
		type: data[6],
		speaker_status: data[7],
		youtube_id: data[8],
		is_active: data[9],
		created_at: data[10],
		updated_at: data[11]
	}
	return result;
}