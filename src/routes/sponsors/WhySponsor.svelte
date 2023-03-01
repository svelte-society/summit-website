<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	type Survey = {
		img: string;
		text: string;
		href: string;
	};

	export let surveys: Survey[] = [
		{
			img: 'https://picsum.photos/200/300',
			text: 'SvelteKit has the highest satisfaction score of newcomer frameworks',
			href: 'https://picsum.photos/200/300'
		},
		{
			img: 'https://picsum.photos/200/300',
			text: 'SvelteKit has the highest satisfaction score of newcomer frameworks',
			href: 'https://picsum.photos/200/300'
		},
		{
			img: 'https://picsum.photos/200/300',
			text: 'SvelteKit has the highest satisfaction score of newcomer frameworks',
			href: 'https://picsum.photos/200/300'
		},
		{
			img: 'https://picsum.photos/200/300',
			text: 'SvelteKit has the highest satisfaction score of newcomer frameworks',
			href: 'https://picsum.photos/200/300'
		},
		{
			img: 'https://picsum.photos/200/300',
			text: 'SvelteKit has the highest satisfaction score of newcomer frameworks',
			href: 'https://picsum.photos/200/300'
		}
	];
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
		{#each surveys as { img, text, href }}
			<li>
				<a
					class="grid grid-cols-1 gap-2 bg-slate-900 rounded-lg p-2  transition-all elevation-2 hover:elevation-5 hover:scale-[1.02]"
					href="/"
				>
					<img
						class="w-0 sm:w-full h-20 md:h-64 rounded-md object-cover"
						aria-hidden="true"
						src={img}
						alt=""
					/>
					<h3 class="px-1">{text}</h3></a
				>
			</li>
		{/each}
	</ul>
</article>
