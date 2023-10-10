<script lang="ts">
	export let submitting: boolean = false;
	export let wide: boolean = false;
	export let href: string = '';
	export let primary: boolean = false;
	export let secondary: boolean = false;
	export let external: boolean = false;
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	target={external ? '_blank' : ''}
	rel={external ? 'noopener' : ''}
	class:primary
	class:secondary
	class:wide
	class="transition-colors px-4 py-3 rounded-lg text-white font-semibold hover:brightness-110 disabled:hover:brightness-75"
	disabled={submitting}
	{href}
	><slot />
</svelte:element>

<style lang="postcss">
	.primary {
		@apply bg-primary;
	}
	.secondary {
		@apply bg-secondary;
	}
	.wide {
		@apply px-10;
	}
</style>
