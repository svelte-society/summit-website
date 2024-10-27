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

export const conferenceFields = {
	name: {
		type: "text",
		label: "Conference Name",
		placeholder: "Enter conference name",
	},
	slug: {
		type: "text",
		label: "URL Slug",
		placeholder: "conference-name-2024",
		helpText: "Used in the URL, must be lowercase with hyphens",
	},
	description: {
		type: "textarea",
		label: "Description",
		placeholder: "Enter conference description",
		rows: 4,
	},
	start_date: {
		type: "date",
		label: "Start Date",
	},
	end_date: {
		type: "date",
		label: "End Date",
	},
	venue: {
		type: "text",
		label: "Venue Name",
		placeholder: "Convention Center",
	},
	address: {
		type: "text",
		label: "Address",
		placeholder: "Street address",
	},
	city: {
		type: "text",
		label: "City",
	},
	country: {
		type: "select",
		label: "Country",
		options: [
			{ value: "US", label: "United States" },
			{ value: "UK", label: "United Kingdom" },
			// Add more as needed
		],
	},
	timezone: {
		type: "select",
		label: "Timezone",
		options: [
			{ value: "UTC", label: "UTC" },
			{ value: "America/New_York", label: "Eastern Time" },
			// Add more as needed
		],
	},
	website: {
		type: "url",
		label: "Website URL",
		placeholder: "https://",
	},
	logo_url: {
		type: "url",
		label: "Logo URL",
		placeholder: "https://",
	},
	banner_url: {
		type: "url",
		label: "Banner URL",
		placeholder: "https://",
	},
	max_attendees: {
		type: "number",
		label: "Maximum Attendees",
		min: 1,
	},
};

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

export const userFields = {
	email: {
		type: "text",
		label: "Email Address",
		placeholder: "user@example.com",
	},
	username: {
		type: "text",
		label: "Username",
		placeholder: "username",
		helpText: "At least 3 characters",
	},
	name: {
		type: "text",
		label: "Full Name",
		placeholder: "John Doe",
	},
	avatar_url: {
		type: "url",
		label: "Avatar URL",
	},
	bio: {
		type: "textarea",
		label: "Bio",
		rows: 3,
	},
	location: {
		type: "text",
		label: "Location",
		placeholder: "City, Country",
	},
	twitter: {
		type: "text",
		label: "Twitter Username",
		placeholder: "@username",
	},
	company: {
		type: "text",
		label: "Company",
	},
	website: {
		type: "url",
		label: "Website",
	},
	role: {
		type: "select",
		label: "Role",
		options: [
			{ value: 1, label: "User" },
			{ value: 2, label: "Admin" },
			{ value: 3, label: "Super Admin" },
		],
	},
};

export const sponsorSchema = z.object({
	name: z.string().min(1, "Name is required"),
	description: z.string().optional(),
	website: z.string().url().optional().or(z.literal("")),
	logo_url: z.string().url().optional().or(z.literal("")),
});

export const sponsorFields = {
	name: {
		type: "text",
		label: "Sponsor Name",
		placeholder: "Company Name",
	},
	description: {
		type: "textarea",
		label: "Description",
		rows: 3,
	},
	website: {
		type: "url",
		label: "Website URL",
	},
	logo_url: {
		type: "url",
		label: "Logo URL",
	},
};

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

export const talkFields = {
	conference_id: {
		type: "select",
		label: "Conference",
		options: [], // These would be populated dynamically
	},
	title: {
		type: "text",
		label: "Talk Title",
		placeholder: "Enter talk title",
	},
	slug: {
		type: "text",
		label: "URL Slug",
		placeholder: "talk-title",
		helpText: "Used in the URL, must be lowercase with hyphens",
	},
	description: {
		type: "textarea",
		label: "Short Description",
		rows: 2,
		helpText: "Brief overview of the talk",
	},
	abstract: {
		type: "textarea",
		label: "Full Abstract",
		rows: 4,
		helpText: "Detailed description of the talk",
	},
	level: {
		type: "select",
		label: "Experience Level",
		options: [
			{ value: "beginner", label: "Beginner" },
			{ value: "intermediate", label: "Intermediate" },
			{ value: "advanced", label: "Advanced" },
		],
	},
	duration: {
		type: "number",
		label: "Duration (minutes)",
		min: 5,
		step: 5,
	},
	scheduled_at: {
		type: "date",
		label: "Scheduled Date/Time",
	},
	room: {
		type: "text",
		label: "Room",
		placeholder: "Main Hall",
	},
	status: {
		type: "select",
		label: "Status",
		options: [
			{ value: "draft", label: "Draft" },
			{ value: "submitted", label: "Submitted" },
			{ value: "accepted", label: "Accepted" },
			{ value: "rejected", label: "Rejected" },
			{ value: "confirmed", label: "Confirmed" },
		],
	},
	slides_url: {
		type: "url",
		label: "Slides URL",
	},
	recording_url: {
		type: "url",
		label: "Recording URL",
	},
};

export const querySchema = z.object({
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().positive().max(100).default(10),
	sort: z.string().optional(),
	order: z.enum(["asc", "desc"]).default("asc"),
	search: z.string().optional(),
});

export const roleSchema = z.object({
	name: z.string().min(1),
	value: z.string().min(1),
	description: z.string().min(1),
	active: z.boolean(),
});

export const roleFields = {
	name: {
		type: "text",
		label: "Role Name",
		placeholder: "Admin",
	},
	value: {
		type: "text",
		label: "Role Value",
		placeholder: "admin",
		helpText: "Unique identifier for the role",
	},
	description: {
		type: "textarea",
		label: "Description",
		rows: 2,
	},
	active: {
		type: "select",
		label: "Status",
		options: [
			{ value: true, label: "Active" },
			{ value: false, label: "Inactive" },
		],
	},
};

export const tableDefinitions = {
	users: { schema: userSchema, fields: userFields },
	conferences: { schema: conferenceSchema, fields: conferenceFields },
	talks: { schema: talkSchema, fields: talkFields },
	sponsors: { schema: sponsorSchema, fields: sponsorFields },
	roles: { schema: roleSchema, fields: roleFields },
};
