<script>
	import '../app.postcss';
	import { Head } from 'svead';
	import { page } from '$app/stores';
</script>

<!-- <Head
	title={$page.data.meta.title}
	description={$page.data.meta.description}
	url={$page.url.toString()}
	image="https://sveltesummit.com/metaimg.png?2382234234623234843"
/> -->

<slot />
