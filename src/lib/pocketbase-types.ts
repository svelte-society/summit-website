/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Conference = "Conference",
	Questions = "Questions",
	Speaker = "Speaker",
	Sponsor = "Sponsor",
	Statistics = "Statistics",
	SvelteHighlights = "Svelte_Highlights",
	Talk = "Talk",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum ConferenceSeasonOptions {
	"spring" = "spring",
	"summer" = "summer",
	"fall" = "fall",
	"winter" = "winter",
}
export type ConferenceRecord = {
	accent_color?: string
	date?: IsoDateString
	highlights?: RecordIdString[]
	mc?: RecordIdString[]
	meta_description?: string
	meta_img?: string
	meta_title?: string
	primary_color?: string
	questions?: RecordIdString[]
	season?: ConferenceSeasonOptions
	sponsors?: RecordIdString[]
	statistics?: RecordIdString[]
	subtitle: string
	talks?: RecordIdString[]
	title: string
	year: number
}

export type QuestionsRecord = {
	answer?: HTMLString
	question?: string
}

export type SpeakerRecord = {
	bio?: HTMLString
	name: string
	picture: string
	tagline: string
	twitter?: string
}

export enum SponsorTypeOptions {
	"platinum" = "platinum",
	"gold" = "gold",
	"silver" = "silver",
	"meetball" = "meetball",
}
export type SponsorRecord = {
	href: string
	logo: string
	name: string
	snippet?: string
	type: SponsorTypeOptions
}

export type StatisticsRecord = {
	Color?: string
	Title?: string
	Unit?: string
	Value?: number
}

export type SvelteHighlightsRecord = {
	Image?: string
	Link?: string
	Text?: string
	Title?: string
}

export type TalkRecord = {
	Description?: HTMLString
	Priority?: number
	Slug: string
	Speakers: RecordIdString[]
	Title: string
	Transcript?: HTMLString
	Youtube_ID?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ConferenceResponse<Texpand = unknown> = Required<ConferenceRecord> & BaseSystemFields<Texpand>
export type QuestionsResponse<Texpand = unknown> = Required<QuestionsRecord> & BaseSystemFields<Texpand>
export type SpeakerResponse<Texpand = unknown> = Required<SpeakerRecord> & BaseSystemFields<Texpand>
export type SponsorResponse<Texpand = unknown> = Required<SponsorRecord> & BaseSystemFields<Texpand>
export type StatisticsResponse<Texpand = unknown> = Required<StatisticsRecord> & BaseSystemFields<Texpand>
export type SvelteHighlightsResponse<Texpand = unknown> = Required<SvelteHighlightsRecord> & BaseSystemFields<Texpand>
export type TalkResponse<Texpand = unknown> = Required<TalkRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Conference: ConferenceRecord
	Questions: QuestionsRecord
	Speaker: SpeakerRecord
	Sponsor: SponsorRecord
	Statistics: StatisticsRecord
	Svelte_Highlights: SvelteHighlightsRecord
	Talk: TalkRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Conference: ConferenceResponse
	Questions: QuestionsResponse
	Speaker: SpeakerResponse
	Sponsor: SponsorResponse
	Statistics: StatisticsResponse
	Svelte_Highlights: SvelteHighlightsResponse
	Talk: TalkResponse
	users: UsersResponse
}