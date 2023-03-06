<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Package from './Package.svelte';

	type Package = {
		title: string;
		value: number;
		prose: string;
		full_width: boolean;
		sponsors: string[];
		type: string;
	};

	export let packages: Package[];
</script>

<article id="intro" class="bg-gray-800 text-gray-100 py-16">
	<div class="grid gap-4 w-full sm:w-4/5 mx-auto px-4 md:py-16 py-8 max-w-6xl">
		<h2 class="font-semibold text-4xl text-center">Packages</h2>
		<hr class="border-gray-100 border-2 rounded-lg w-52 mx-auto" />
	</div>
	<ul class="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto px-2">
		{#each packages as { title, value, prose, full_width, sponsors, type }}
			<Package {title} {value} {prose} {full_width} {sponsors} {type} />
		{/each}
	</ul>
</article>
