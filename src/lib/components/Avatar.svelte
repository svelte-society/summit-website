<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	export let id: string;
	export let file: string;
	export let name: string;
	export let size: number = 40;
</script>

<picture>
	<source
		srcset="//wsrv.nl/?url={PUBLIC_API_URL}/files/speakers/{id}/{file}&w={size * 2}&output=webp"
		type="image/webp"
	/>
	<img
		class="rounded-full"
		width={size}
		height={size}
		src="//wsrv.nl/?url={PUBLIC_API_URL}/files/speakers/{id}/{file}&w={size * 2}"
		alt="{name} logo"
	/>
</picture>
