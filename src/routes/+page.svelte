<script lang="ts">
	export let data;
	const [latest_two] = splitArray(data.conferences);

	function splitArray<T>(arr: T[]): [T[], T[]] {
		if (arr.length < 2) {
			throw new Error('Array must contain at least 2 elements');
		}

		const firstTwo = arr.slice(0, 2);
		const rest = arr.slice(2);

		return [firstTwo, rest];
	}
</script>

<ul class="grid content-center w-full grid-cols-1 md:grid-cols-2 text-white">
	{#each latest_two as { subtitle, year, season, primary_color, secondary_color, text_color, date }}
		<li
			style:--color-primary={primary_color}
			style:--color-secondary={secondary_color}
			style:--color-text={text_color}
			class="bg-primary h-[50vh] md:h-screen grid content-center relative"
		>
			<a href="/{year}/{season}">
				<h1
					class="font-display gap-2 grid md:grid-cols-[3fr,2fr] place-content-center hover:scale-[1.01] transition-transform p-4"
				>
					<div class="text-center md:text-right lg:text-8xl text-7xl break-words">
						SVELTE SUMMIT <span class="text-secondary">{season.toUpperCase()}</span>
					</div>
					<div
						class="text-center md:text-left md:flex md:flex-col lg:pt-0.5 lg:text-4xl text-3xl w-full md:w-32"
					>
						<div class="text-secondary">{date}</div>
						<div>{subtitle.toUpperCase()}</div>
					</div>
				</h1>
			</a>
		</li>
	{/each}
</ul>
