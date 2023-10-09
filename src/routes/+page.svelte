<div class="grid landing-page-grid w-full h-">
	<div class="bg-blue-400 current">Current</div>
	<div class="bg-red-400 next">Next</div>
	<div class="bg-yellow-400 past">Past</div>
</div>

<style>
	:global(body) {
		@apply bg-black text-white;
	}
	.landing-page-grid {
		grid-template-rows: 1fr 1fr 150px;
		grid-template-areas:
			'current'
			'next'
			'past';
		height: 100svh;

		@media screen and (min-width: 680px) {
			grid-template-rows: 1fr 150px;
			grid-template-areas:
				'current next'
				'past past';
		}
	}
	.current {
		grid-area: current;
	}
	.past {
		grid-area: past;
	}
	.next {
		grid-area: next;
	}
</style>
