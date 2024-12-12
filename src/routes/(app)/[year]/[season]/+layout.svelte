<script>
	import ConferencePicker from '$lib/components/ConferencePicker.svelte';
	import Link from './NavLink.svelte';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';

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

	export let data;
</script>

<div
	style:--color-primary={data.primary_color}
	style:--color-secondary={data.secondary_color}
	style:--color-text={data.text_color}
	class="bg-primary text-crystal-50 font-body min-h-screen"
>
	<!--
	<nav class="fixed inset-x-0 w-full bg-black/75 p-6 z-50 text-white">
		<ul
			class="w-full flex flex-wrap flex-row place-content-center place-items-center gap-5 md:gap-5 center"
		>
			{#each nav_links as { href, text }}
				<li>
					<Link href="/{$page.params.year}/{$page.params.season}{href}">{text}</Link>
				</li>
			{/each}
			<ConferencePicker conferences={data.conferences} />
			{#if data.speaker_status === 'cfp_open'}
				<Button href="/{$page.params.year}/{$page.params.season}/submit" secondary thin>
					Submit Talk
				</Button>
			{/if}
		</ul>
	</nav>
	-->

	<main class="pt-32"><slot /></main>

	<footer class="bg-primary text-white py-4 text-center">
		Svelte Summit is a conference made possible by <span class="font-semibold">
			Svelte School AB
		</span>
		and <a class="font-semibold underline" href="https://sveltesociety.dev">Svelte Society</a>.
	</footer>
</div>
