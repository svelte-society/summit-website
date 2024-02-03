<script lang="ts">
	// SvelteKit
	import { page } from '$app/stores';

	// Packages
	import { superForm } from 'sveltekit-superforms/client';

	// Sections
	import Sponsors from './Sponsors.svelte';
	import Sessions from './Sessions.svelte';
	import CTA from './CTA.svelte';
	import Faq from './Faq.svelte';

	// Components and assets
	import Button from '$lib/components/Button.svelte';
	import logo from './logo.svg';
	import MCs from './MCs.svelte';

	let { data } = $props();
</script>

<div
	id="intro"
	class="-mt-32 cover bg-center bg-no-repeat lg:bg-[length:700px] md:bg-[length:500px] bg-[length:300px] text-white"
>
	{#if data.youtube_id}
		<div class="cover-center aspect-w-16 aspect-h-9">
			<iframe
				title="Svelte Summit YouTube Stream"
				src="https://www.youtube.com/embed/{data.youtube_id}"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				loading="lazy"
			/>
		</div>
	{:else}
		<div class="relative cover-center grid place-items-center gap-12 text-white">
			<img class="w-20 md:w-36" src={logo} alt="Svelte Society Logo" />
			<h1 class="font-display gap-2 grid md:grid-cols-2 place-content-center">
				<div class="text-center md:text-right lg:text-8xl text-7xl title">
					SVELTE SUMMIT <span class="text-secondary">{$page.params.season.toUpperCase()}</span>
				</div>
				<div
					class="text-center md:text-left md:flex md:flex-col lg:pt-0.5 lg:text-4xl text-3xl w-full md:w-32"
				>
					<div class="text-secondary">{data.date}</div>
					<div>{data.subtitle.toUpperCase()}</div>
				</div>
			</h1>
		</div>
	{/if}
	<p class="mb-2 mx-auto text-center max-w-64">
		Stay up to date with the latest Svelte Summit news
	</p>
	<div class="mx-auto">
		<Button href="https://marketing.sveltesociety.dev/forms/nfrm_2yLDNVbQ" external secondary
			>Sign up to the newsletter</Button
		>
	</div>
</div>

<Sponsors
	main={data.sponsors.main}
	gold={data.sponsors.gold}
	platinum={data.sponsors.platinum}
	is_open_to_sponsorships={!data.is_old}
/>
<MCs mcs={data.mcs} />
{#if data.speaker_status === 'cfp_open'}
	<CTA
		title="Want to speak at the conference?"
		href="/{$page.params.year}/{$page.params.season}/submit"
		text="We're super stoked to see what kind of talks that will be submitted this year! If you're interested in speaking at the conference, please head on over to our submission link below! This event is all online and all talks should be pre-recorded."
	/>
{:else if data.speaker_status === 'show_speakers'}
	<Sessions sessions={data.sessions} />
{:else if data.speaker_status === 'videos_ready'}
	<Sessions sessions={data.sessions} />
{/if}
<Faq questions={data.questions} />

<style>
	.cover {
		display: flex;
		flex-direction: column;
		min-block-size: 100vh;
		padding: 3rem;
	}

	.cover > * {
		margin-block: 1rem;
	}

	.cover > :first-child:not(.cover-center) {
		margin-block-start: 0;
	}

	.cover > :last-child:not(.cover-center) {
		margin-block-end: 0;
	}

	.cover > .cover-center {
		margin-block: auto;
	}
	.title {
		word-spacing: 9999px;
	}
	.accent-ring {
		background-image: url('/accent_ring.svg');
	}
</style>
