<script lang="ts">
	import { img_url } from '$lib/utils';
	import { PUBLIC_API_URL } from '$env/static/public';
	const {
		collectionId,
		id,
		file,
		name,
		size = 40,
		url
	} = $props<{ collectionId: string; id: string; file: string; name: string; size: number }>();
</script>

<picture>
	<source
		srcset={url || img_url(`${PUBLIC_API_URL}/api/files/${collectionId}/${id}/${file}`, {
			width: size * 2,
			format: 'webp',
			quality: 70
		})}
		type="image/webp"
	/>
	<img
		class="rounded-full"
		width={size}
		height={size}
		src={url || img_url(`${PUBLIC_API_URL}/api/files/${collectionId}/${id}/${file}`, {
			width: size * 2,
			quality: 70
		})}
		alt="{name} logo"
	/>
</picture>
