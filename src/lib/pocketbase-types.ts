/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Conference = "Conference",
	Packages = "Packages",
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

export enum ConferenceTypeOptions {
	"virtual" = "virtual",
	"in-person" = "in-person",
}

export enum ConferenceSpeakerStatusOptions {
	"cfp_open" = "cfp_open",
	"cfp_closed" = "cfp_closed",
	"show_speakers" = "show_speakers",
	"videos_ready" = "videos_ready",
}
export type ConferenceRecord = {
	date?: IsoDateString
	highlights?: RecordIdString[]
	is_active?: boolean
	mc?: RecordIdString[]
	meta_description?: string
	meta_img?: string
	meta_title?: string
	open_to_sponsor?: boolean
	packages?: RecordIdString[]
	primary_color?: string
	questions?: RecordIdString[]
	season?: ConferenceSeasonOptions
	secondary_color?: string
	speaker_status?: ConferenceSpeakerStatusOptions
	sponsors?: RecordIdString[]
	statistics?: RecordIdString[]
	subtitle: string
	talks?: RecordIdString[]
	text_color?: string
	title: string
	type: ConferenceTypeOptions
	year: number
	youtube_id?: string
}

export enum PackagesTypeOptions {
	"platinum" = "platinum",
	"gold" = "gold",
	"silver" = "silver",
	"main" = "main",
	"other" = "other",
}
export type PackagesRecord = {
	full_width?: boolean
	prose?: HTMLString
	slots: number
	title: string
	type: PackagesTypeOptions
	value: string
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
	color?: string
	title?: string
	unit?: string
	value?: number
}

export type SvelteHighlightsRecord = {
	Image?: string
	Link?: string
	Text?: string
	Title?: string
}

export type TalkRecord = {
	conference?: RecordIdString
	description?: HTMLString
	meta_description?: string
	priority?: number
	slug: string
	speakers: RecordIdString[]
	title: string
	transcript?: HTMLString
	youtube_ID?: string
}

export enum UsersRoleOptions {
	"user" = "user",
	"speaker" = "speaker",
	"owner" = "owner",
	"admin" = "admin",
}
export type UsersRecord = {
	avatar?: string
	bio?: HTMLString
	name?: string
	role: UsersRoleOptions
	tagline?: string
	talks?: RecordIdString[]
	twitter?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ConferenceResponse<Texpand = unknown> = Required<ConferenceRecord> & BaseSystemFields<Texpand>
export type PackagesResponse<Texpand = unknown> = Required<PackagesRecord> & BaseSystemFields<Texpand>
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
	Packages: PackagesRecord
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
	Packages: PackagesResponse
	Questions: QuestionsResponse
	Speaker: SpeakerResponse
	Sponsor: SponsorResponse
	Statistics: StatisticsResponse
	Svelte_Highlights: SvelteHighlightsResponse
	Talk: TalkResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Conference'): RecordService<ConferenceResponse>
	collection(idOrName: 'Packages'): RecordService<PackagesResponse>
	collection(idOrName: 'Questions'): RecordService<QuestionsResponse>
	collection(idOrName: 'Speaker'): RecordService<SpeakerResponse>
	collection(idOrName: 'Sponsor'): RecordService<SponsorResponse>
	collection(idOrName: 'Statistics'): RecordService<StatisticsResponse>
	collection(idOrName: 'Svelte_Highlights'): RecordService<SvelteHighlightsResponse>
	collection(idOrName: 'Talk'): RecordService<TalkResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
