<script lang="ts">
	import { page } from '$app/stores';
	import Speaker from '../Speaker.svelte';
	export let data;
</script>

<div class="grid gap-8 py-28 mx-auto w-full max-w-2xl">
	<div class="rounded-xl bg-secondary shadow-xl sm:p-4">
		<iframe
			loading="lazy"
			title="{data.talk.title} YouTube video"
			class="rounded-lg aspect-video w-full sm:h-96"
			src="https://www.youtube.com/embed/{data.talk.youtube_ID}"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
	<h1 class="text-4xl font-semibold text-center text-white">{data.talk.title}</h1>
	<ul class="rounded-lg flex flex-wrap gap-4 place-content-between">
		{#each data.talk.speakers as speaker}
			<li class="bg-secondary rounded-md p-2"><Speaker {speaker} /></li>
		{/each}
	</ul>
	<div class="prose prose-p:text-slate-100 prose-p:text-lg">{@html data.talk.description}</div>
	<div class="flex flex-wrap place-content-between">
		<a
			class="flex gap-2 text-md hover:underline underline-offset-4 decoration-2 decoration-slate-200 font-semibold bg-secondary rounded-md p-2"
			href="/{$page.params.year}/{$page.params.season}"
			><svg
				class="h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
				/>
			</svg>
			Go Back</a
		>
	</div>
	{#if data.talk.transcript}
		<h2
			class="text-center text-xl font-semibold underline underline-offset-4 underline-4 text-white"
		>
			Transcript
		</h2>
		<div class="prose prose-lg grid prose-p:text-slate-200">
			{@html data.talk.transcript}
		</div>
	{/if}
</div>
