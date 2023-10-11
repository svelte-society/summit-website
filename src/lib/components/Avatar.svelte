<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	export let collectionId: string;
	export let id: string;
	export let file: string;
	export let name: string;
	export let size: number = 40;
</script>

<picture>
	<source
		srcset="//wsrv.nl/?url={PUBLIC_API_URL}/api/files/{collectionId}/{id}/{file}&w={size *
			2}&output=webp&q=70"
		type="image/webp"
	/>
	<img
		class="rounded-full"
		width={size}
		height={size}
		src="//wsrv.nl/?url={PUBLIC_API_URL}/api/files/{collectionId}/{id}/{file}&w={size * 2}&q=70"
		alt="{name} logo"
	/>
</picture>
