<script lang="ts">
	import Speaker from '../Speaker.svelte';
	export let data;
</script>

<div class="grid gap-8 py-28 mx-auto w-full max-w-2xl">
	<div class="rounded-xl bg-secondary shadow-xl p-4">
		<iframe
			title="{data.talk.title} YouTube video"
			class="rounded-lg overflow-auto aspect-video w-full h-96"
			src="https://www.youtube.com/embed/{data.talk.yt_id}"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
	<h1 class="text-4xl font-semibold text-center">{data.talk.title}</h1>
	<div class="prose prose-p:text-slate-100 prose-p:text-lg">{@html data.talk.description}</div>
	<div class="flex flex-wrap place-content-between">
		<a
			class="flex gap-2 text-md hover:underline underline-offset-4 decoration-2 decoration-slate-200 font-semibold"
			href="/"
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
		{#each data.talk.speakers as speaker}
			<Speaker {speaker} />
		{/each}
	</div>
</div>
