<script>
	import { Head } from 'svead';
	import { page } from '$app/stores';
	import { PUBLIC_API_URL } from '$env/static/public';
	import '../app.postcss';
</script>

<Head
	title={$page.data.meta.title}
	description={$page.data.meta.description}
	url={$page.url.toString()}
	image="//wsrv.nl/?url={PUBLIC_API_URL}/files/{$page.data.meta.collectionId}/{$page.data.meta
		.recordId}/{$page.data.meta.image}&output=png"
/>

<slot />
