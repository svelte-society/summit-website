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

<base href="{$page.url.origin}/{$page.params.year}/{$page.params.season}" />

<Head
	title={$page.data.meta.title}
	description={$page.data.meta.description}
	url={$page.url.toString()}
	image="https://sveltesummit.com/metaimg.png?2382234234623234843"
/>

<nav class="fixed inset-x-0 w-full bg-black/75 p-6">
	<ul class="flex flex-wrap flex-row place-content-center place-items-center gap-5 md:gap-5 center">
		{#each nav_links as { href, text }}
			<li>
				<Link {href}>{text}</Link>
			</li>
		{/each}
	</ul>
</nav>
<main><slot /></main>
