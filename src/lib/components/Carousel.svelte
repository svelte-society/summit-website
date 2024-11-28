<script lang="ts">
	const {
		imgs,
		width,
		height
	}: { imgs: Array<{ src: string; alt: string }>; width: string; height: string } = $props();

	const id = crypto.randomUUID();

	const time = 5000;
</script>

<div style:--length={imgs.length} style:--width={width} style:--height={height} class="carousel">
	{#each imgs as img, i}
		<img id="carousel-{id}-{i}" {...img} />
	{/each}
</div>
<div class="dots">
	{#each imgs as img, i}
		<a aria-label="goto image {img.alt}" href="#carousel-{id}-{i}"> </a>
	{/each}
</div>

<style>
	.carousel {
		width: var(--width);
		height: var(--height);
		display: grid;
		grid-template-columns: repeat(var(--length), 100%);
		overflow-x: auto;
		scroll-behavior: smooth;
		scroll-snap-type: x mandatory;
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	.carousel::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.carousel {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	img {
		width: 100%;
		height: 100%;
		scroll-snap-align: start;
	}

	.dots {
		display: flex;
		gap: 1rem;
		padding-block: 1rem;
		justify-content: center;
	}

	.dots a {
		background-color: white;
		height: 0.5rem;
		width: 0.5rem;
		border-radius: 50%;
	}
</style>
