<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import SvelteStatistic from './SvelteStatistic.svelte';

	type Survey = {
		img: string;
		text: string;
		href: string;
	};

	export let svelte_stats: Survey[];
</script>

<article id="intro" class="bg-gray-800 text-gray-100 py-16">
	<div class="grid gap-4 w-full sm:w-4/5 mx-auto px-4 md:py-16 py-8 max-w-6xl">
		<h2 class="font-semibold text-4xl text-center">Why sponsor?</h2>
		<hr class="border-gray-100 border-2 rounded-lg w-52 mx-auto" />
		<div class="prose prose-p:text-gray-100 w-full md:4/5 text-lg mx-auto">
			<p class="">
				Svelte is growing like crazy. Numbers are up manyfold on the Community discord, Reddit as
				well as on a number of other platforms. Developers love Svelte. So much so that they quit
				their jobs if they find a new one where they can use it. As you can see in the screenshots
				below, Svelte topped the charts for most exciting and most loved framework in a couple of
				surveys this year.
			</p>
		</div>
		<p class="text-center text-xl text-papaya-600 underline underline-offset-3">
			With your help we can make Svelte Summit even better.
		</p>
	</div>
	<ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full max-w-5xl mx-auto px-2">
		{#each svelte_stats as { id, img, text, href }}
			<SvelteStatistic {id} {img} {text} {href} />
		{/each}
	</ul>
</article>
