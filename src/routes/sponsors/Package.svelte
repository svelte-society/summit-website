<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { HtmlTag } from 'svelte/internal';

	export let title: string;
	export let value: number;
	export let prose: string;
</script>

<li
	class:platinum={title === 'Platinum'}
	class="grid grid-cols-1 gap-2 bg-slate-900 rounded-lg p-2  transition-all elevation-2 hover:elevation-5 hover:scale-[1.02]"
>
	<div class="flex place-content-between">
		<h3>{title}</h3>
		<span>€<data {value}>{value}</data></span>
	</div>
	<div class="prose">
		{@html prose}
	</div>
	<div class="ml-auto"><Button primary>I'm interested!</Button></div>
</li>

<style lang="postcss">
	.platinum {
		@apply row-span-full;
	}
</style>
