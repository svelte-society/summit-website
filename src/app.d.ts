// See https://kit.svelte.dev/docs/types#app

import type { TypedPocketBase } from "$lib/pocketbase-types";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: TypedPocketBase
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
