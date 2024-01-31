<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();

	const { form, errors, constraints, enhance } = superForm(data.form, {
		clearOnSubmit: 'errors-and-message'
	});

	$inspect(data.talks);
</script>

<div class="p-8 bg-white rounded-xl shadow-lg relative max-w-3xl mx-auto">
	<div class="space-y-2">
		<h2 class="text-3xl font-bold">Submit Your Talk</h2>
		<p class="text-zinc-600">Fill out the form below to submit your talk proposal.</p>
	</div>
	{#if data.user}
		<form class="flex items-start space-x-8 mt-4" method="POST" use:enhance>
			<div class="w-1/2 space-y-8">
				<div class="space-y-4">
					<div class="space-y-2">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="title">Title</label
						><input
							class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							id="title"
							name="title"
							aria-invalid={$errors.title ? 'true' : undefined}
							bind:value={$form.title}
							{...$constraints.title}
							placeholder="Enter the title of your talk"
						/>
					</div>

					<div class="space-y-2">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="description">Description</label
						><textarea
							class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
							id="description"
							name="description"
							placeholder="Enter a brief description of your talk"
							aria-invalid={$errors.description ? 'true' : undefined}
							bind:value={$form.description}
							{...$constraints.description}
						/>
					</div>
					<div class="space-y-2 grid">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="format">Format</label
						><select
							class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							name="format"
							aria-invalid={$errors.format ? 'true' : undefined}
							bind:value={$form.format}
							{...$constraints.format}
						>
							<option value="regular">Regular</option>
							<option value="lightning">Lightning</option>
						</select>
					</div>
					<div class="space-y-2 grid">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="level">Level</label
						><select
							class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							name="level"
							aria-invalid={$errors.level ? 'true' : undefined}
							bind:value={$form.level}
							{...$constraints.level}
						>
							<option value="beginner">Beginner</option>
							<option value="intermediate">Intermediate</option>
							<option value="advanced">Advanced</option>
						</select>
					</div>
					<div class="space-y-2">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="notes">Additional Notes</label
						><textarea
							class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
							id="notes"
							name="notes"
							placeholder="Enter any additional notes or comments"
							aria-invalid={$errors.notes ? 'true' : undefined}
							bind:value={$form.notes}
							{...$constraints.notes}
						/>
					</div>
					<!-- <div class="space-y-2">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="co-speakers">Co-Speakers' Email Addresses</label
						><input
							type="email"
							class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							id="co-speakers"
							placeholder="Enter co-speakers' email addresses"
						/>
					</div> -->
					<input hidden name="conference" type="text" value={$page.data.id} />
					<button
						class="text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-primary-foreground hover:bg-secondary/90 h-10 px-4 py-2 w-full"
						type="submit"
					>
						Submit Talk
					</button>
				</div>
			</div>
			<div class="w-1/2 space-y-8">
				<h2 class="text-lg font-semibold">Your talks</h2>
				<ul>
					{#each data.talks as talk}
						<li>
							<a href="{$page.params.year}/{$page.params.season}/submit/{talk.id}">{talk.title}</a>
						</li>
					{/each}
				</ul>
				<p class="font-semibold">Please include the following in your submission:</p>
				<ul class="list-disc list-inside space-y-2">
					<li>A clear and concise title</li>
					<li>
						A description of your talk. This will show up on the website if your talk is approved
					</li>
					<li>The format of your talk (Regular or Lightning)</li>
					<li>The level of your talk (Beginner, Intermediate, Advanced)</li>
					<li>Any additional notes or comments</li>
					<li>You can login and update the information later</li>
				</ul>
			</div>
		</form>
	{:else}
		<div class="grid place-items-center gap-4">
			<p class="font-bold w-full text-center mt-8">Log in to submit a talk.</p>
			<ul class="flex flex-wrap gap-2">
				{#each data.authProviders || [] as { name, authUrl, codeVerifier }}
					<li>
						<a
							href={authUrl + $page.url.href + '?codeVerifier=' + codeVerifier}
							class="capitalize justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-black/90 h-10 px-4 py-2 bg-black text-white rounded-lg flex items-center space-x-2"
						>
							{name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
	{#if data.user}
		<div
			class="absolute top-2 right-8 mt-4 p-2 flex items-center space-x-4 rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-300 transition-shadow"
		>
			<img
				src="https://github.com/{data.user.username}.png"
				height="40"
				width="40"
				alt="User profile"
				class="rounded-full border-2 outline-2 border-black"
				style="aspect-ratio:40/40;object-fit:cover"
			/>
			<div>
				<p class="text-sm text-gray-500">Logged in as</p>
				<p class="font-medium">{data.user.name || data.user.username}</p>
			</div>
		</div>
	{/if}
</div>
