<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { QuestionsResponse } from '$lib/pocketbase-types';
	const { questions } = $props<{ questions: QuestionsResponse[] }>();
</script>

<article id="faq" class="bg-gray-100 text-black">
	<div class="grid gap-4 w-full sm:w-4/5 md:w-3/5 mx-auto px-4 md:py-16 py-8 max-w-6xl">
		<h2 class="font-semibold text-2xl text-center">Frequently Asked Questions (FAQ)</h2>
		<hr class="border-black border-2 rounded-lg w-52 mx-auto" />
		<dl class="columns-1 lg:columns-2 column-gap-2 w-full">
			{#each questions as { question, answer }}
				<div class="question grid gap-0">
					<dt class="text-xl font-semibold">{question}</dt>
					<dd class="m-0">
						{@html answer}
					</dd>
				</div>
			{/each}
		</dl>
		<div class="mx-auto">
			<Button external primary href="https://svelte.dev/chat"
				>Got more questions? Join the Discord!</Button
			>
		</div>
	</div>
</article>

<style lang="postcss">
	.question {
		@apply pb-4;
	}
</style>
