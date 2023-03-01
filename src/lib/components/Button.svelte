<script lang="ts">
	export let wide: boolean = false;
	export let href: string = '';
	export let primary: boolean = false;
	export let secondary: boolean = false;
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class:primary
	class:secondary
	class:wide
	class="transition-colors px-4 py-3 rounded-lg text-white font-semibold"
	href=""
	><slot />
</svelte:element>

<style lang="postcss">
	.primary {
		@apply bg-crystal-500 hover:bg-crystal-400;
	}
	.secondary {
		@apply bg-papaya-500 hover:bg-papaya-600;
	}
	.wide {
		@apply px-10;
	}
</style>
