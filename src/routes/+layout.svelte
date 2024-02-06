<script>
	import { img_url } from '$lib/utils';
	import { Head } from 'svead';
	import { page } from '$app/stores';
	import '../app.postcss';

	let { data } = $props();
</script>

<Head
	title={$page.data.meta.title}
	description={$page.data.meta.description}
	url={$page.url.toString()}
	image={img_url($page.data.meta.image)}
/>

<slot />
