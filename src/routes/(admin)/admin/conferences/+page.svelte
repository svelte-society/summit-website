<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '../Card.svelte';

	let { data } = $props();
</script>

<Card wide>
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
				{#each data.conferences as { id, year, season, talks, date }}
					<tr
						class="border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-muted"
					>
						<td class="p-4 align-middle capitalize">{year}</td>
						<td class="p-4 align-middle capitalize">{season}</td>
						<td class="p-4 align-middle capitalize">{talks.length}</td>
						<td class="p-4 align-middle capitalize">{date}</td>
						<td class="p-4 align-middle">
							<Button secondary thin href="/admin/conferences/{id}">View</Button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Card>
