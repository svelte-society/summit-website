<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	const {
		collectionId,
		id,
		file,
		name,
		size = 40
	} = $props<{ collectionId: string; id: string; file: string; name: string; size: number }>();
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
