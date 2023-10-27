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

	export let data;

	const { form, constraints, errors, enhance, message, submitting } = superForm(data.form);
</script>

<div
	id="intro"
	class="cover bg-center bg-no-repeat lg:bg-[length:700px] md:bg-[length:500px] bg-[length:300px]"
>
	{#if data.is_old}
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
		<div class="relative cover-center grid place-items-center gap-12">
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
	{#if !$message}
		<form
			class="mx-auto flex flex-col gap-2"
			method="POST"
			action="/{$page.params.year}/{$page.params.seasons}/signup?/subscribe"
			use:enhance
		>
			<span class="mx-auto text-xl">Sign up to the newsletter</span>
			<label class="flex flex-col md:flex-row w-full gap-3 px-4">
				<input
					{...$constraints.email}
					bind:value={$form.email}
					class="rounded-lg border-hidden px-4 py-3 sm:w-96 placeholder-slate-500 text-black"
					placeholder="Your e-mail address..."
					name="email"
					type="email"
				/>
				<Button submitting={$submitting} secondary>Sign up</Button>
			</label>
			{#if $errors.email}
				Something went wrong.
			{/if}
		</form>
	{:else}
		<dialog class="bottom-5 text-xl bg-slate-900 rounded-md text-slate-100" open>
			<form class="relative p-6" method="dialog">
				<span class="px-4"
					>Thanks for signing up! If you can't find the email, make sure you check your spam folder.</span
				>
				<button class="absolute right-0 top-0" aria-label="Close">
					<svg
						class="fill-slate-100 h-8 w-8 hover:fill-papaya-400"
						fill="none"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><g stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
							><path d="m12 22c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z" /><path
								d="m9.16998 14.83 5.66002-5.65996"
							/><path d="m14.83 14.83-5.66002-5.65996" /></g
						></svg
					></button
				>
			</form>
		</dialog>
	{/if}
</div>

<Sponsors
	gold={data.sponsors.gold}
	platinum={data.sponsors.platinum}
	is_open_to_sponsorships={!data.is_old}
/>
<MCs mcs={data.mcs} />
{#if data.speaker_status === 'cfp_open'}
	<CTA />
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
