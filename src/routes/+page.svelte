<script>
	// Packages
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { superForm } from 'sveltekit-superforms/client';

	// Sections
	import Sponsors from './Sponsors.svelte';
	import Speakers from './Speakers.svelte';
	import CTA from './CTA.svelte';
	import Faq from './Faq.svelte';

	// Components and assets
	import Button from '$lib/components/Button.svelte';
	import logo from './logo.svg';

	export let data;

	const { form, constraints, errors, enhance } = superForm(data.form);
</script>

<div
	id="intro"
	class="cover accent-ring bg-center bg-no-repeat lg:bg-[length:700px] md:bg-[length:500px] bg-[length:300px]"
>
	<div class="cover-center grid place-items-center gap-12">
		<img class="w-20 md:w-36" src={logo} alt="Svelte Society Logo" />
		<h1 class="font-display gap-2 grid md:grid-cols-2 place-content-center">
			<div class="text-center md:text-right lg:text-8xl text-7xl title">
				SVELTE SUMMIT <span class="text-papaya-400">SPRING</span>
			</div>
			<div
				class="text-center md:text-left md:flex md:flex-col lg:pt-0.5 lg:text-4xl text-3xl w-full md:w-32"
			>
				<div class="text-papaya-400">MAY 6 2023</div>
				<div>THE 6TH VIRTUAL SVELTE CONFERENCE</div>
			</div>
		</h1>
	</div>
	<!-- <form class="mx-auto flex flex-col gap-2" method="POST" action="?/subscribe" use:enhance>
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
			<Button secondary>Sign up</Button>
		</label>
		{#if $errors.email}
			YO!!! You got an error going for ya
		{/if}
	</form> -->
</div>

<Sponsors />
<CTA />
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
	main {
		background-image: url('./accent_ring.svg');
	}
	.title {
		word-spacing: 9999px;
	}
	.accent-ring {
		background-image: url('/accent_ring.svg');
	}
</style>
