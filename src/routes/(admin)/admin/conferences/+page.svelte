<script lang="ts">
	import Card from '../Card.svelte';

	let { data } = $props();
</script>

<header class="flex flex-col justify-between items-start mb-6 col-span-2">
	<h1 class="text-2xl font-bold mb-4">Dashboard</h1>
</header>
<Card wide>
	<h2 class="text-xl font-semibold mb-4">Conferences</h2>
	<div class="relative w-full overflow-auto">
		<table class="w-full caption-bottom text-sm">
			<thead class="[&amp;_tr]:border-b">
				<tr class="border-b transition-colors hover:bg-slate-100/50" data-state="selected">
					<th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground"> Year </th>
					<th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
						Season
					</th>
					<th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
						Talks
					</th>
					<th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground"> Date </th>
					<th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
						Details
					</th>
				</tr>
			</thead>
			<tbody class="[&amp;_tr:last-child]:border-0">
				{#each data.conferences as { title, year, season, talks, date }}
					<tr
						class="border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-muted"
					>
						<td class="p-4 align-middle capitalize">{year}</td>
						<td class="p-4 align-middle capitalize">{season}</td>
						<td class="p-4 align-middle capitalize">{talks.length}</td>
						<td class="p-4 align-middle capitalize">{date}</td>
						<td class="p-4 align-middle">
							<button
								class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2"
							>
								View
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Card>
