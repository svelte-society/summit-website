<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { HtmlTag } from 'svelte/internal';

	export let title: string;
	export let value: number;
	export let prose: string;
	export let full_width: boolean = false;
	export let sponsors: string[];
</script>

<li
	class:col-span-full={full_width}
	class="grid grid-cols-1 gap-2 bg-slate-900 rounded-md p-6 elevation-2"
>
	<div class="flex place-content-between">
		<h3 class="text-3xl font-semibold">{title}</h3>
		<span class="text-2xl font-semibold">€<data {value}>{value}</data></span>
	</div>
	<div class="text-slate-400 text-sm font-semibold">({3 - (sponsors?.length || 0)} of 3 left)</div>
	<div class="prose prose-p:text-slate-200 prose-li:text-slate-200">
		{@html prose}
	</div>
	<div class="ml-auto"><Button primary>I'm interested!</Button></div>
</li>
