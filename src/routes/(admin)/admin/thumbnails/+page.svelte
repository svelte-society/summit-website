<script lang="ts">
	export let data;
</script>

<div class="m-4">
	<ul>
		{#each data.talks as talk}
			<li><a href="/admin/thumbnails/{talk.id}">{talk.title}</a></li>
		{/each}
	</ul>
</div>
