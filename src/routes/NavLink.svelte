<script lang="ts">
	export let href: string;
</script>

<a class="hover:text-secondary transition-colors font-semibold text-lg" {href}><slot /></a>
