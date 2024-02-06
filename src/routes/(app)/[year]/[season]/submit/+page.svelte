<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	import TalkForm from './TalkForm.svelte';

	let { data } = $props<{ data: PageData }>();

	const { form, errors, constraints, enhance } = superForm(data.createForm, {
		clearOnSubmit: 'errors-and-message',
		multipleSubmits: 'prevent'
	});

	const { form: deleteForm, enhance: deleteEnhance } = superForm(data.deleteForm, {
		clearOnSubmit: 'errors-and-message',
		multipleSubmits: 'prevent'
	});
</script>

<div class="space-y-2">
	<h2 class="text-3xl font-bold">Submit a Talk</h2>
	<p class="text-zinc-600">Fill out the form below to submit your talk proposal.</p>
</div>
{#if data.user}
	<div class="flex items-start space-x-8 mt-4">
		<TalkForm {enhance} {errors} {form} {constraints} action="?/submit" />
		<div class="w-1/2 space-y-8">
			{#if data.talks?.length > 0}
				<div class="grid space-y-2">
					<h2 class="text-xl font-semibold">Your talks</h2>
					<ul class="grid space-y-1">
						{#each data.talks as talk}
							<li>
								<form
									class="grid grid-cols-[1fr_auto]"
									action="?/delete"
									method="post"
									use:deleteEnhance
								>
									<a
										class="text-primary font-semibold hover:underline transition-colors"
										href="/{$page.params.year}/{$page.params.season}/submit/{talk.id}"
										>{talk.title}</a
									>
									<button
										class="hover:bg-secondary transition-colors rounded-full"
										value={talk.id}
										name="id"
										><svg
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6 p-1"
										>
											<title>Delete Talk</title>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
											/>
										</svg>
									</button>
								</form>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
			<div class="grid space-y-2">
				<p class="text-xl font-semibold">Instructions</p>
				<ul class="list-disc list-inside space-y-2">
					<li>A clear and concise title</li>
					<li>A description of your talk. This will be displayed on the website.</li>
					<li>The format of your talk (Regular (25 min) or Lightning (10 min))</li>
					<li>The level of your talk (Beginner, Intermediate, Advanced)</li>
					<li>Any additional notes or comments. This is for the organizers.</li>
					<li>You can login and update the information later</li>
				</ul>
			</div>
		</div>
	</div>
{:else}
	<div class="grid place-items-center gap-4">
		<p class="font-bold w-full text-center mt-8">Log in to submit a talk.</p>
		<ul class="flex flex-wrap gap-2">
			{#each data.authProviders || [] as { name, authUrl, codeVerifier }}
				<li>
					<a
						href={authUrl + $page.url.href + '?codeVerifier=' + codeVerifier}
						class="capitalize justify-center text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-black/90 h-10 px-4 py-2 bg-black text-white rounded-lg flex items-center space-x-2"
					>
						{name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
