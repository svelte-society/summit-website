<script>
	import { Head } from 'svead';
	import { page } from '$app/stores';
	import '../app.postcss';

	let { data } = $props();

	$effect(() => {
		const url = new URL(window.location);
		url.search = '';

		window.history.replaceState({}, '', url);
	});
</script>

<Head
	title={$page.data.meta.title}
	description={$page.data.meta.description}
	url={$page.url.toString()}
	image="https://wsrv.nl/?url={$page.data.meta.image}&output=png&maxage=7d"
/>

<slot />
