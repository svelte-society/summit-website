<script lang="ts">
	const {
		imgs,
		width,
		height
	}: { imgs: Array<{ src: string; alt: string }>; width: string; height: string } = $props();

	const id = crypto.randomUUID();

	const time = 5000;

	// by default no showing image because we will use a css hack for SSR
	let showing_img = $state(-1);

	function scroll_image(num: number) {
		const img = document.getElementById(`carousel-${id}-${num}`);
		if (img) {
			img.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'center'
			});
		}
	}

	const imgs_el: HTMLImageElement[] = [];

	const timeouts: Array<ReturnType<typeof setTimeout>> = [];
	const intervals: Array<ReturnType<typeof setInterval>> = [];

	function start_autoscroll() {
		for (let i = 0; i < imgs_el.length; i++) {
			const img = imgs_el[i];
			// for each image we wait for time * i and then we scroll them into view every time * imgs.length
			timeouts.push(
				setTimeout(() => {
					function scroll_in() {
						img.scrollIntoView({
							behavior: 'smooth',
							block: 'nearest',
							inline: 'center'
						});
					}
					scroll_in();
					intervals.push(setInterval(scroll_in, time * imgs.length));
				}, time * i)
			);
		}
	}

	function stop_autoscroll() {
		for (let timeout of timeouts) {
			clearTimeout(timeout);
		}
		for (let interval of intervals) {
			clearInterval(interval);
		}
		timeouts.length = 0;
		intervals.length = 0;
	}

	function scroll(div: HTMLDivElement) {
		// only start the autoscroll when the wrapper is in view and stop it when it's out of view
		const intersection_observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					start_autoscroll();
				} else {
					stop_autoscroll();
				}
			},
			{
				threshold: 1
			}
		);
		intersection_observer.observe(div);
		return {
			destroy() {
				intersection_observer.unobserve(div);
				intersection_observer.disconnect();
			}
		};
	}

	function highlight_dot(img: HTMLImageElement, num: number) {
		// when a new image scroll into view we highlight the dot...done this way so it also works
		// when the user manually scroll in the container
		const intersection_observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					showing_img = num;
				}
			},
			{
				threshold: 1
			}
		);
		intersection_observer.observe(img);
		return {
			destroy() {
				intersection_observer.unobserve(img);
				intersection_observer.disconnect();
			}
		};
	}

	// we use this to stop the autoscroll when the user scroll manually or clicks one of the dots
	function stop_for_a_while() {
		stop_autoscroll();
		timeouts.push(
			setTimeout(() => {
				start_autoscroll();
			}, time)
		);
	}
	$effect(() => {
		return () => {
			// clear everything on onmount just to be sure
			stop_autoscroll();
		};
	});
</script>

<div
	use:scroll
	onpointerdown={() => {
		// user might be scrolling on mobile, let's stop
		stop_for_a_while();
	}}
	onwheel={() => {
		// user might be scrolling on desktop, let's stop
		stop_for_a_while();
	}}
	style:--length={imgs.length}
	style:--width={width}
	style:--height={height}
	class="carousel"
>
	{#each imgs as img, i}
		<img use:highlight_dot={i} bind:this={imgs_el[i]} id="carousel-{id}-{i}" {...img} />
	{/each}
</div>
<div class="dots">
	{#each imgs as img, i}
		<a
			class:showing={showing_img === i}
			onclick={(e) => {
				// we have JS, let's not scroll the page up and manually scroll the image in
				e.preventDefault();
				stop_for_a_while();
				scroll_image(i);
			}}
			aria-label="goto image {img.alt}"
			href="#carousel-{id}-{i}"
		>
		</a>
	{/each}
</div>

<!-- 
	weird hack to show the dot of the current targeted image at full opacity
	this will unfortunately stay in the page as unused when JS loads (i tried to remove it but svelte
	doesn't want to 😄)
-->
<svelte:head>
	{@html `<sty` +
		`le>
	${[...Array(imgs.length).keys()]
		.map((i) => {
			return `:has(img#carousel-${id}-${i}:target) a[href="#carousel-${id}-${i}"]{
			opacity: 1
		}`;
		})
		.join('\n')}
</style>`}
</svelte:head>

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
		opacity: 0.5;
		height: 0.5rem;
		width: 0.5rem;
		border-radius: 50%;
	}

	.dots .showing {
		opacity: 1;
	}
</style>
