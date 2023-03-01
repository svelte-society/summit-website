<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { HtmlTag } from 'svelte/internal';

	export let title: string;
	export let value: number;
	export let prose: string;
</script>

<div class="flex place-content-between">
	<h3>{title}</h3>
	<span>€<data {value}>{value}</data></span>
</div>
<div class="prose">
	{@html prose}
</div>
<div class="ml-auto"><Button primary>I'm interested!</Button></div>
