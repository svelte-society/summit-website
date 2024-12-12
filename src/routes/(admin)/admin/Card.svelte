<script>
	let { wide, children } = $props();
</script>

<section class="mb-6" class:wide>
	<div class="bg-white p-4 rounded shadow">
        {@render children()}
	</div>
</section>

<style>
	.wide {
		@apply col-start-1 col-end-[-1];
	}
</style>
