<script lang="ts">
	// Sections
	import Intro from './Intro.svelte';
	import WhySponsor from './WhySponsor.svelte';
	import Packages from './Packages.svelte';

	import Button from '$lib/components/Button.svelte';

	export let data;
</script>

<div class="cover bg-primary">
	<div class="cover-center grid place-items-center gap-6">
		<h1 class="font-display text-5xl text-center">Sponsorship Opportunities</h1>
		<div class="text-3xl text-slate-300">Nov 11th, Online</div>
	</div>
	<div class="mx-auto">
		<div class="grid place-items-center md:flex-row w-full gap-3 px-">
			<p>The only Svelte focused conference on the planet.</p>
			<Button wide secondary href="mailto:sponsors@sveltesummit.com">Contact Us</Button>
		</div>
	</div>
</div>

<Intro stats={data.statistics} />

<WhySponsor svelte_stats={data.highlights} />

<Packages packages={data.packages} />

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
</style>
