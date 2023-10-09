<script>
	import Link from './NavLink.svelte';
	import { Head } from 'svead';
	import { page } from '$app/stores';

	let nav_links = [
		{
			href: '/#intro',
			text: 'Intro'
		},
		{
			href: '/#sponsors',
			text: 'Sponsors'
		},
		{
			href: '/#speakers',
			text: 'Speakers'
		},
		{
			href: '/#faq',
			text: 'FAQ'
		}
	];
</script>

<Head
	title={$page.data.meta.title}
	description={$page.data.meta.description}
	url={$page.url.toString()}
	image="//wsrv.nl/?url=https://summit-api-v2.sveltesociety.dev/api/files/{$page.data.meta
		.collectionId}/{$page.data.meta.recordId}/{$page.data.meta.image}&output=png"
/>

<nav class="fixed inset-x-0 w-full bg-black/75 p-6 z-50">
	<ul class="flex flex-wrap flex-row place-content-center place-items-center gap-5 md:gap-5 center">
		{#each nav_links as { href, text }}
			<li>
				<Link href="/{$page.params.year}/{$page.params.season}{href}">{text}</Link>
			</li>
		{/each}
	</ul>
</nav>
<main><slot /></main>

<style>
	:global(body) {
		@apply bg-blue-800 text-crystal-50 font-body;
	}
</style>
