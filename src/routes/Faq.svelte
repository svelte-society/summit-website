<script>
	import Button from '$lib/components/Button.svelte';
	export let questions = [
		{
			question: 'What is this?',
			answer:
				"Svelte Summit is an event dedicated to Svelte and everything that is happening in the community. This is the first time we're going in-person. Don't miss it! It's going to be an absolute blast!"
		},
		{
			question: 'What is this?',
			answer:
				"Svelte Summit is an event dedicated to Svelte and everything that is happening in the community. This is the first time we're going in-person. Don't miss it! It's going to be an absolute blast!"
		},
		{
			question: 'What is this?',
			answer:
				"Svelte Summit is an event dedicated to Svelte and everything that is happening in the community. This is the first time we're going in-person. Don't miss it! It's going to be an absolute blast!"
		},
		{
			question: 'What is this?',
			answer:
				"Svelte Summit is an event dedicated to Svelte and everything that is happening in the community. This is the first time we're going in-person. Don't miss it! It's going to be an absolute blast!"
		},
		{
			question: 'What is this?',
			answer:
				"Svelte Summit is an event dedicated to Svelte and everything that is happening in the community. This is the first time we're going in-person. Don't miss it! It's going to be an absolute blast!"
		},
		{
			question: 'What is this?',
			answer:
				"Svelte Summit is an event dedicated to Svelte and everything that is happening in the community. This is the first time we're going in-person. Don't miss it! It's going to be an absolute blast!"
		},
		{
			question: 'What is this?',
			answer:
				"Svelte Summit is an event dedicated to Svelte and everything that is happening in the community. This is the first time we're going in-person. Don't miss it! It's going to be an absolute blast!"
		},
		{
			question: 'What is this?',
			answer:
				"Svelte Summit is an event dedicated to Svelte and everything that is happening in the community. This is the first time we're going in-person. Don't miss it! It's going to be an absolute blast!"
		}
	];
</script>

<article id="faq" class="bg-gray-100 text-black">
	<div class="grid gap-4 w-full sm:w-4/5 md:w-3/5 mx-auto px-4 md:py-16 py-8 max-w-6xl">
		<h2 class="font-semibold text-2xl text-center">Frequently Asked Questions (FAQ)</h2>
		<hr class="border-black border-2 rounded-lg w-52 mx-auto" />
		<dl class="grid grid-cols-1 auto-cols-fr md:grid-cols-2 gap-8 w-full">
			{#each questions as { question, answer }}
				<div class="grid gap-2">
					<dt class="text-xl font-semibold">{question}</dt>
					<dd class="m-0">
						{answer}
					</dd>
				</div>
			{/each}
		</dl>
		<div class="mx-auto">
			<Button primary>Got more questions? Join the Discord!</Button>
		</div>
	</div>
</article>
