<script>
	import '../app.postcss';
	import { Head } from 'svead';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta
		http-equiv="Content-Security-Policy"
		content="default-src 'self'; img-src https://*; child-src 'none'; frame-src youtube.com https://www.youtube.com;"
	/>
</svelte:head>

<Head
	title={$page.data.meta.title}
	description={$page.data.meta.description}
	url={$page.url.toString()}
	image="https://sveltesummit.com/metaimg.png?2382234234623234843"
/>

<slot />
