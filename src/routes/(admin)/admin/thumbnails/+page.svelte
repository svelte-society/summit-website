<script lang="ts">
	export let data;

	console.log(data);
</script>

<div class="m-4">
	<h1>Thumbnails: Conferences</h1>
	<ul>
		{#each data.conferences as { year, season, id }}
			<li><a href="/admin/thumbnails/{id}">{year} - {season}</a></li>
		{/each}
	</ul>
</div>
