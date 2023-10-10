<script lang="ts">
	import SocietyStatistic from './SocietyStatistic.svelte';

	type Stat = {
		value: string;
		unit: string;
		title: string;
		color: string;
	};

	export let stats: Stat[];
</script>

<article id="intro" class="bg-gray-800 text-gray-100 py-16">
	<div class="grid gap-4 w-full sm:w-4/5 mx-auto px-4 md:py-16 py-8 max-w-6xl">
		<h2 class="font-semibold text-4xl text-center">About Svelte Summit</h2>
		<hr class="border-gray-100 border-2 rounded-lg w-52 mx-auto" />
		<div class="prose prose-p:text-gray-100 w-full md:4/5 text-lg mx-auto">
			<p class="">
				On the 26th of April 2019 we held the first Svelte conference. It gathered over 1000 highly
				enthusiastic developers from across the globe. Since then we've hosted and organised three
				more events, each time the number of attendees grows by a lot. In contrast to most other
				events we take pride in keeping it joyful and fun, much like how people feel when they
				decide to use Svelte.
			</p>
			<p>Below you'll find some stats on earlier events as well as our Social media accounts.</p>
		</div>
		<ul class="grid grid-stat-card-cols gap-2 w-full font-body">
			{#each stats as { value, color, unit, title }}
				<SocietyStatistic {value} {unit} {color} {title} />
			{/each}
		</ul>
	</div>
</article>

<style>
	.grid-stat-card-cols {
		grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
	}
</style>
