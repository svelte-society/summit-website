<script lang="ts">
	import PocketBase from 'pocketbase';
	import { PUBLIC_API_URL } from '$env/static/public';
	import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';
	import { convertToHex } from '$lib/utils.js';

	export let conference;
	export let talk;
	export let title_font_size;

	const pb = new PocketBase(PUBLIC_API_URL);
</script>

<div
	style="background-color: {convertToHex(conference.primary_color)};"
	class="flex text-white h-full w-full relative p-4"
>
	<div
		style="font-family: Anton; font-size: 48px; gap: -17px;"
		class="absolute flex flex-col items-center uppercase right-6 top-4"
	>
		<span>SVELTE</span>
		<span>SUMMIT</span>
		<span style="color: {convertToHex(conference.secondary_color)};">{conference.season}</span>
		<span>{conference.year}</span>
	</div>
	<div class="flex flex-col ml-8 mt-4" class:mt-8={talk.speakers.length === 1}>
		{#each talk.speakers as speaker}
			<div class="flex mb-4 last:mb-0">
				<img
					alt=""
					class="rounded-full"
					src={pb.getFileUrl(speaker, speaker.picture)}
					width="90"
					height="90"
				/>
				<span style="font-size:76px;" class="ml-4">{speaker.name}</span>
			</div>
		{/each}
	</div>
	<div
		style="font-size:{title_font_size}px;"
		class="absolute flex justify-center items-center bottom-2 h-[300px] w-[1150px] left-[25px]"
	>
		{talk.title}
	</div>
</div>
