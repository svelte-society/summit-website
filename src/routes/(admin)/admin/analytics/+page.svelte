<script lang="ts">
	import { response } from 'super-sitemap';
	import type { PageData } from './$types';

	export let data: PageData;
	export let form;
</script>

<div class="grid w-full max-w-2xl gap-4">
	<form method="POST">
		<input
			name="chat"
			class="rounded-lg p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
		/>
		<button
			class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
			type="submit"
		>
			Submit
		</button>
	</form>
	<h2 class="text-xl font-semibold">Response</h2>

	{#if form?.response.choices}
		{#each form.response.choices as choice}
			{@html choice.message.content.replace(/\\/g, '')}
			<pre>
				{choice.message.content}
			</pre>
		{/each}
	{/if}

	<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
		<div class="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
			<h1 class="text-2xl font-bold text-center">Login</h1>
			<form class="space-y-4" action="#">
				<div>
					<label for="email" class="block mb-2 text-sm font-medium">Your email</label>
					<input
						type="email"
						name="email"
						id="email"
						class="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						placeholder="you@example.com"
					/>
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium">Your password</label>
					<input
						type="password"
						name="password"
						id="password"
						class="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						placeholder="••••••••"
					/>
				</div>
				<button
					type="submit"
					class="w-full px-3 py-2 text-white bg-indigo-500 rounded-md focus:outline-none focus:bg-indigo-600"
					>Sign in</button
				>
			</form>
		</div>
	</div>
</div>

<style>
	* {
		min-width: 0;
	}
</style>
