<script lang="ts">
	import Session from './Session.svelte';
	import type { TalksResponse, SpeakersResponse } from '$lib/pocketbase-types';

	type SpeakerExpand = {
		speakers: SpeakersResponse[];
	};
	export let sessions: TalksResponse<SpeakerExpand>[];
</script>

<article id="speakers" class="bg-crystal-600 text-black">
	<div class="grid gap-4 w-full sm:w-4/5 md:w-3/5 mx-auto px-4 py-24 text-center">
		<h2 class="font-semibold text-2xl">Speakers</h2>
		<hr class="border-black border-2 rounded-lg w-52 mx-auto" />
		<ul class="grid gap-4 max-w-4xl lg:grid-cols-2 text-left mx-auto">
			{#each sessions as session}
				<Session {session} />
			{/each}
		</ul>
	</div>
</article>
