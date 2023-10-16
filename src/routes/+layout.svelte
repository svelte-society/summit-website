<script>
	import { Head } from 'svead';
	import { page } from '$app/stores';
	import '../app.postcss';
</script>

<Head
	title={$page.data.meta.title}
	description={$page.data.meta.description}
	url={$page.url.toString()}
	image="//wsrv.nl/?url={$page.data.meta.image}&output=png"
/>

<slot />
