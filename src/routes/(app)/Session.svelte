<script lang="ts">
	import Speaker from './Speaker.svelte';
	import type { TalksResponse, SpeakersResponse } from '$lib/pocketbase-types';

	type SpeakerExpand = {
		speakers: SpeakersResponse[];
	};

	export let session: TalksResponse<SpeakerExpand>;
	const { title, description, expand } = session;
</script>

<li
	class="grid gap-4 grid-rows-[auto_1fr_auto] place-content-start bg-violet-800 shadow-lg rounded-md p-6 text-white"
>
	<h3 class="text-2xl font-semibold leading-8">{title}</h3>
	<div class="text-sm">
		{@html description}
	</div>
	<ul class="grid grid-cols-{expand?.speakers.length === 1 ? '1' : '2'}">
		{#each expand?.speakers || [] as speaker}
			<Speaker {speaker} />
		{/each}
	</ul>
</li>
