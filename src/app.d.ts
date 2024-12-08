// See https://kit.svelte.dev/docs/types#app

import type { TypedPocketBase } from "$lib/pocketbase-types";
import type { AuthRecord } from "pocketbase";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: TypedPocketBase;
			user: AuthRecord;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
