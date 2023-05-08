<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { HtmlTag } from 'svelte/internal';

	export let title: string;
	export let value: number;
	export let prose: string;
	export let full_width: boolean = false;
	export let sponsors: string[];
	export let type: string;

	const number_of_packages = type === 'gold' ? 6 : 3;
</script>

<li
	class:col-span-full={full_width}
	class="grid grid-cols-1 place-content-start gap-3 bg-slate-900 rounded-md p-6 elevation-2"
>
	<div class="flex place-content-between">
		<h3 class="text-3xl font-semibold">{title}</h3>
		<span class="text-2xl font-semibold">€<data {value}>{value}</data></span>
	</div>
	{#if type !== 'other'}
		<div class="text-slate-400 text-sm font-semibold">
			({number_of_packages - (sponsors?.length || 0)} of {number_of_packages} left)
		</div>
	{/if}
	<div class="prose prose-p:text-slate-200 prose-li:text-slate-200 prose-strong:text-slate-100">
		{@html prose}
	</div>
	<div class="ml-auto">
		<Button primary href="mailto:sponsors@sveltesummit.com">I'm interested!</Button>
	</div>
</li>
