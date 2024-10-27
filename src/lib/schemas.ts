import { z } from "zod";

export const conferenceSchema = z.object({
	name: z.string().min(1, "Name is required"),
	slug: z
		.string()
		.min(1, "Slug is required")
		.regex(
			/^[a-z0-9-]+$/,
			"Slug must contain only lowercase letters, numbers, and hyphens",
		),
	description: z.string().optional(),
	start_date: z.string().min(1, "Start date is required"),
	end_date: z.string().min(1, "End date is required"),
	venue: z.string().optional(),
	address: z.string().optional(),
	city: z.string().optional(),
	country: z.string().optional(),
	timezone: z.string().optional(),
	website: z.string().url().optional().or(z.literal("")),
	logo_url: z.string().url().optional().or(z.literal("")),
	banner_url: z.string().url().optional().or(z.literal("")),
	max_attendees: z.number().int().positive().optional(),
});

export const userSchema = z.object({
	email: z.string().email("Invalid email address"),
	username: z.string().min(3, "Username must be at least 3 characters"),
	name: z.string().min(1, "Name is required"),
	bio: z.string().optional(),
	location: z.string().optional(),
	twitter: z.string().optional(),
	company: z.string().optional(),
	website: z.string().url().optional().or(z.literal("")),
});

export const sponsorSchema = z.object({
	name: z.string().min(1, "Name is required"),
	description: z.string().optional(),
	website: z.string().url().optional().or(z.literal("")),
	logo_url: z.string().url().optional().or(z.literal("")),
});

export const talkSchema = z.object({
	conference_id: z.string().min(1, "Conference is required"),
	title: z.string().min(1, "Title is required"),
	slug: z
		.string()
		.min(1, "Slug is required")
		.regex(
			/^[a-z0-9-]+$/,
			"Slug must contain only lowercase letters, numbers, and hyphens",
		),
	description: z.string().optional(),
	abstract: z.string().optional(),
	level: z.enum(["beginner", "intermediate", "advanced"]),
	duration: z.number().int().positive().optional(),
	scheduled_at: z.string().optional(),
	room: z.string().optional(),
	status: z.enum(["draft", "submitted", "accepted", "rejected", "confirmed"]),
	slides_url: z.string().url().optional().or(z.literal("")),
	recording_url: z.string().url().optional().or(z.literal("")),
});

export const querySchema = z.object({
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().positive().max(100).default(10),
	sort: z.string().optional(),
	order: z.enum(["asc", "desc"]).default("asc"),
	search: z.string().optional(),
});

export const schemas = {
	conferences: conferenceSchema,
	users: userSchema,
	sponsors: sponsorSchema,
	talks: talkSchema,
	query: querySchema,
} as const;

export type Schemas = typeof schemas;
