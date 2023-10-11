<script>
	export let data;
</script>

<div class="grid landing-page-grid w-full bg-green-50">
	<div class="bg-blue-400 current">Current</div>
	<div class="bg-yellow-400 past">Past</div>
</div>

<style>
	:global(body) {
		@apply bg-black text-white;
	}
	.landing-page-grid {
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			'current'
			'last';
		height: 100svh;
		width: 100%;

		@media screen and (min-width: 680px) {
			grid-template-rows: initial;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: 'last current';
		}
	}
	.current {
		grid-area: current;
	}
	.past {
		grid-area: past;
	}
</style>
