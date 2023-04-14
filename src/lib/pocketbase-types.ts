/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	ConferenceStats = "conference_stats",
	Questions = "questions",
	Speakers = "speakers",
	SponsorPackages = "sponsor_packages",
	Sponsors = "sponsors",
	SvelteStats = "svelte_stats",
	Talks = "talks",
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

export type ConferenceStatsRecord = {
	value: string
	unit?: string
	description: string
	color: string
}

export type QuestionsRecord = {
	question: string
	answer?: HTMLString
}

export type SpeakersRecord = {
	name: string
	isMc?: boolean
	tagline?: string
	twitter?: string
	bio: HTMLString
	profile?: string
}

export enum SponsorPackagesTypeOptions {
	"platinum" = "platinum",
	"gold" = "gold",
	"other" = "other",
}
export type SponsorPackagesRecord = {
	title: string
	type?: SponsorPackagesTypeOptions
	value: number
	prose: HTMLString
	full_width?: boolean
	sponsors?: RecordIdString[]
}

export enum SponsorsTypeOptions {
	"platinum" = "platinum",
	"gold" = "gold",
	"silver" = "silver",
}
export type SponsorsRecord = {
	name: string
	href: string
	snippet?: string
	type: SponsorsTypeOptions
	logo?: string
	active?: boolean
}

export type SvelteStatsRecord = {
	text: string
	img?: string
	href?: string
}

export type TalksRecord = {
	title?: string
	href?: string
	speakers?: RecordIdString[]
	description?: HTMLString
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ConferenceStatsResponse = ConferenceStatsRecord & BaseSystemFields
export type QuestionsResponse = QuestionsRecord & BaseSystemFields
export type SpeakersResponse = SpeakersRecord & BaseSystemFields
export type SponsorPackagesResponse<Texpand = unknown> = SponsorPackagesRecord & BaseSystemFields<Texpand>
export type SponsorsResponse = SponsorsRecord & BaseSystemFields
export type SvelteStatsResponse = SvelteStatsRecord & BaseSystemFields
export type TalksResponse<Texpand = unknown> = TalksRecord & BaseSystemFields<Texpand>
export type UsersResponse = UsersRecord & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	conference_stats: ConferenceStatsRecord
	questions: QuestionsRecord
	speakers: SpeakersRecord
	sponsor_packages: SponsorPackagesRecord
	sponsors: SponsorsRecord
	svelte_stats: SvelteStatsRecord
	talks: TalksRecord
	users: UsersRecord
}

export type CollectionResponses = {
	conference_stats: ConferenceStatsResponse
	questions: QuestionsResponse
	speakers: SpeakersResponse
	sponsor_packages: SponsorPackagesResponse
	sponsors: SponsorsResponse
	svelte_stats: SvelteStatsResponse
	talks: TalksResponse
	users: UsersResponse
}