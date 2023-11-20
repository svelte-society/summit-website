<script>
	import { Head } from 'svead';
	import { page } from '$app/stores';
	import '../app.postcss';

	export let data;
</script>

<Head
	title={data.meta.title}
	description={data.meta.description}
	url={$page.url.toString()}
	image="//wsrv.nl/?url={data.meta.image}&output=png&maxage=7d"
/>

<slot />
