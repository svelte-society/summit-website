<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, fg, bg, ...rest }: HTMLAnchorAttributes & { bg: string; fg: string } = $props();
</script>

<div class="wrapper">
	<a style:--fg={fg} style:--bg={bg} {...rest}>
		<div class="bg"></div>
		{@render children?.()}
	</a>
</div>

<style>
	.wrapper {
		isolation: isolate;
		display: inline-block;
	}
	a {
		position: relative;
		display: inline-block;
		background: linear-gradient(to right, var(--bg) 50%, var(--fg) 50%);
		background-size: 200% 100%;
		background-position: right;
		transition: background-position 0.3s ease-in-out;
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		overflow: hidden;
	}

	.bg {
		position: absolute;
		top: 0;
		left: 0;
		/* to hide subpixel rendering */
		width: 101%;
		height: 100%;
		background: linear-gradient(to right, var(--fg) 50%, var(--bg) 50%);
		background-size: 200% 100%;
		background-position: right;
		transition: background-position 0.3s ease-in-out;
		z-index: -1;
	}

	a:hover,
	a:hover > .bg {
		background-position: left bottom;
	}
</style>
