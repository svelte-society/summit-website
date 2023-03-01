<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	type Stat = {
		value: string;
		modifier: string;
		text: string;
		color: string;
	};

	export let stats: Stat[] = [
		{
			value: '2.5',
			modifier: 'k',
			text: 'live attendees',
			color: '#d9cfff'
		},
		{
			value: '21',
			modifier: 'k',
			text: 'async attendees',
			color: '#f83b3b'
		},
		{
			value: '50',
			modifier: '+',
			text: 'countries reached',
			color: '#f83b3b'
		},
		{
			value: '15',
			modifier: '+',
			text: 'talks from around the world',
			color: '#f83b3b'
		},
		{
			value: '15.5',
			modifier: 'k',
			text: 'twitter followers',
			color: '#f83b3b'
		},
		{
			value: '200',
			modifier: 'k+',
			text: 'YouTube views',
			color: '#f83b3b'
		},
		{
			value: '15.7',
			modifier: 'k',
			text: 'YouTube subscribers',
			color: '#f83b3b'
		}
	];
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
			{#each stats as { value, modifier, text, color }}
				<li
					class="flex flex-col place-content-center place-items-center gap-0 h-32 bg-slate-900 rounded-lg text-slate-100 transition-all elevation-2 hover:elevation-5 hover:scale-[1.02]"
				>
					<span class="text-5xl font-bold" style="color: {color}"
						>{value}<small class="text-2xl">{modifier}</small></span
					>
					<span>{text}</span>
				</li>
			{/each}
		</ul>
	</div>
</article>

<style>
	.grid-stat-card-cols {
		grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
	}
</style>
