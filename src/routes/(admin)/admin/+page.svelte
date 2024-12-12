<script>
	import Card from './Card.svelte';
</script>

<header class="flex flex-col justify-between items-start mb-6 col-span-2">
	<h1 class="text-2xl font-bold mb-4">Dashboard</h1>
</header>
<section class="mb-6 col-span-2">
	<div class="bg-white p-4 rounded shadow">
		<h2 class="text-xl font-semibold mb-4">Placeholder Card 1</h2>
		<img alt="Chart" class="aspect-[2/1] object-cover w-full" height="250" src="" width="500" />
		<div class="flex mt-4">
			<button
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mr-2"
			>
				Day
			</button>
			<button
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mr-2"
			>
				Week
			</button>
			<button
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
			>
				Month
			</button>
		</div>
	</div>
</section>
<Card wide>
	<h2 class="text-xl font-semibold mb-4">Placeholder Card 2</h2>
</Card>
<Card>
	<h2 class="text-xl font-semibold mb-4">Placeholder Card 3</h2>
</Card>
<Card>
	<h2 class="text-xl font-semibold mb-4">Placeholder Card 4</h2>
</Card>
