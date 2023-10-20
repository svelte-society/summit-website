<script>
	export let conferences = [];
</script>

<li class=" bg-slate-950 border-2 border-slate-900 rounded-lg py-2 px-4">
	<a class="text-sm font-semibol d" href="#" aria-haspopup="true">Select Conference</a>
	<ul
		class="absolute left-0 top-10 bg-slate-950 border-2 border-slate-900 rounded-lg grid grid-cols-1 gap-2 w-full py-2"
		aria-label="submenu"
	>
		{#each conferences as { year, season }}
			<li>
				<a
					class="capitalize py-2 px-4 text-xs font-semibold hover:text-secondary transition-all"
					href="/{year}/{season}">{season} {year}</a
				>
			</li>
		{/each}
	</ul>
</li>

<style>
	a {
		text-decoration: none;
	}

	li {
		display: block;
		position: relative;
		transition-duration: 0.5s;
	}

	li:hover,
	li:focus-within {
		cursor: pointer;
	}

	li ul {
		visibility: hidden;
		opacity: 0;
		transition: all 0.5s ease;
		display: none;
	}

	li:hover > ul,
	li:focus-within > ul,
	li ul:hover,
	li ul:focus {
		visibility: visible;
		opacity: 1;
		display: grid;
	}
</style>
