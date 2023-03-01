<script>
	import Link from './NavLink.svelte';
	import '../app.postcss';

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

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Svelte Summit Spring 2023: The worlds biggest Svelte Conference</title>
	<meta name="title" content="Svelte Summit Spring 2023: The worlds biggest Svelte Conference" />
	<meta name="description" content="The worlds largest Svelte conference." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.sveltesummit.com/" />
	<meta
		property="og:title"
		content="Svelte Summit Spring 2023: The worlds biggest Svelte Conference"
	/>
	<meta property="og:description" content="The worlds largest Svelte conference." />
	<meta property="og:image" content="https://sveltesummit.com/metaimg.png?2382234234623234843" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.sveltesummit.com/" />
	<meta
		property="twitter:title"
		content="Svelte Summit Spring 2023: The worlds biggest Svelte Conference"
	/>
	<meta property="twitter:description" content="The worlds largest Svelte conference." />
	<meta
		property="twitter:image"
		content="https://sveltesummit.com/metaimg.png?2382234234623234843"
	/>
</svelte:head>

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
