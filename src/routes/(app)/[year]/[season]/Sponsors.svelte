<script lang="ts">
	import type { SponsorsResponse } from '../lib/pocketbase-types';
	import Sponsor from './Sponsor.svelte';
	import { page } from '$app/stores';

	export let platinum: (SponsorsResponse | undefined)[];
	export let gold: (SponsorsResponse | undefined)[];
</script>

<article id="sponsors" class="bg-yellow-400 text-black">
	<div class="grid gap-4 w-full sm:w-4/5 md:w-3/5 mx-auto px-4 md:py-16 py-8 text-center max-w-4xl">
		<h2 class="font-semibold text-2xl">Sponsor</h2>
		<hr class="border-black border-2 rounded-lg w-52 mx-auto" />
		<div class="grid gap-3">
			<ul class="grid grid-cols-1 gap-3">
				{#each platinum.concat(Array(3 - platinum.length).fill(undefined)) as sponsor}
					<Sponsor {sponsor} is_platinum={true} />
				{/each}
			</ul>
			<ul class="grid lg:grid-cols-3 grid-cols-2 gap-3">
				{#each gold.concat(Array(6 - gold.length).fill(undefined)) as sponsor}
					<Sponsor {sponsor} />
				{/each}
			</ul>
		</div>
		<a
			class="bg-blue-800 hover:bg-blue-700 transition-colors px-4 py-3 rounded-lg text-white font-semibold w-full sm:w-56 mx-auto"
			href="/{$page.params.year}/{$page.params.season}/sponsors">Become a sponsor</a
		>
	</div>
</article>
