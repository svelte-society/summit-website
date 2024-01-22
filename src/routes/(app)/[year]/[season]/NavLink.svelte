<script lang="ts">
	import type { Snippet } from "svelte";

	const { href, children } = $props<{ href: string, children: Snippet }>();
</script>

<a class="hover:text-secondary transition-colors font-semibold text-lg" {href}>{@render children()}</a>
