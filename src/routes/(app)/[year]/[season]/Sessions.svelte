<script lang="ts">
	import Session from './Session.svelte';
	import type { TalkResponse, SpeakerResponse } from '$lib/pocketbase-types';

	type SpeakerExpand = {
		speakers?: SpeakerResponse[];
		speaker?: SpeakerResponse[];
	};
	const { sessions } = $props<{ sessions: TalkResponse<SpeakerExpand>[] }>();
</script>

<article id="speakers" class="bg-primary text-white">
	<div class="grid gap-4 w-full sm:w-4/5 mx-auto px-4 py-24 text-center">
		<h2 class="font-semibold text-2xl">Speakers</h2>
		<hr class="border-white border-2 rounded-lg w-52 mx-auto" />
		<ul class="grid gap-4 max-w-4xl lg:grid-cols-2 text-left mx-auto">
			{#each sessions as session}
				<Session {session} />
			{/each}
		</ul>
	</div>
</article>
