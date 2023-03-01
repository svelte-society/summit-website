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
