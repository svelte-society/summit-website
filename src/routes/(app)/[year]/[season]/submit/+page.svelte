<script lang="ts">
	import PocketBase from 'pocketbase';
	import { PUBLIC_API_URL } from '$env/static/public';

	let pb = new PocketBase(PUBLIC_API_URL);

	export let data;

	const loginWithGitHub = async () => {
		await pb.collection('users').authWithOAuth2({
			provider: 'github'
		});

		pb = pb;
	};
	$: console.log(pb.authStore.model);
</script>

<div class="p-8 bg-white rounded-xl shadow-lg relative max-w-3xl mx-auto">
	<div class="space-y-2">
		<h2 class="text-3xl font-bold">Submit Your Talk</h2>
		<p class="text-zinc-600">Fill out the form below to submit your talk proposal.</p>
	</div>
	{#if pb.authStore.model}
		<form class="flex items-start space-x-8 mt-4">
			<div class="w-1/2 space-y-8">
				<div class="space-y-4">
					<div class="space-y-2">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="title">Title</label
						><input
							class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							id="title"
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
							placeholder="Enter a brief description of your talk"
						/>
					</div>
					<div class="space-y-2">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="format">Format</label
						><button
							type="button"
							role="combobox"
							aria-controls="radix-:R9relllla:"
							aria-expanded="false"
							aria-autocomplete="none"
							dir="ltr"
							data-state="closed"
							data-placeholder=""
							class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							><span style="pointer-events:none">Select a format</span><svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="h-4 w-4 opacity-50"
								aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg
							></button
						><select
							aria-hidden="true"
							tabindex="-1"
							style="position:absolute;border:0;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;word-wrap:normal"
							><option value="" /></select
						>
					</div>
					<div class="space-y-2">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="level">Level</label
						><button
							type="button"
							role="combobox"
							aria-controls="radix-:Rabelllla:"
							aria-expanded="false"
							aria-autocomplete="none"
							dir="ltr"
							data-state="closed"
							data-placeholder=""
							class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							><span style="pointer-events:none">Select a level</span><svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="h-4 w-4 opacity-50"
								aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg
							></button
						><select
							aria-hidden="true"
							tabindex="-1"
							style="position:absolute;border:0;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;word-wrap:normal"
							><option value="" /></select
						>
					</div>
					<div class="space-y-2">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="notes">Additional Notes</label
						><textarea
							class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
							id="notes"
							placeholder="Enter any additional notes or comments"
						/>
					</div>
					<div class="space-y-2">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="co-speakers">Co-Speakers' Email Addresses</label
						><input
							type="email"
							class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							id="co-speakers"
							placeholder="Enter co-speakers' email addresses"
						/>
					</div>
					<button
						class="text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-primary-foreground hover:bg-secondary/90 h-10 px-4 py-2 w-full"
						type="submit"
					>
						Submit Talk
					</button>
				</div>
			</div>
			<div class="w-1/2 space-y-8">
				<p class="text-zinc-500 dark:text-zinc-400">
					Please include the following in your submission:
				</p>
				<ul class="list-disc list-inside space-y-2">
					<li>A clear and concise title</li>
					<li>A brief description of your talk</li>
					<li>The format of your talk (Regular or Lightning)</li>
					<li>The level of your talk (Beginner, Intermediate, Advanced)</li>
					<li>Any additional notes or comments</li>
					<li>Co-Speakers' Email Addresses if any</li>
				</ul>
			</div>
		</form>
	{:else}
		<div class="grid place-items-center gap-4">
			<p class="font-bold w-full text-center mt-8">Log in to submit a talk.</p>
			<button
				on:click|preventDefault={loginWithGitHub}
				class="justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-black/90 h-10 px-4 py-2 bg-black text-white rounded-lg flex items-center space-x-2"
			>
				GitHub
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class=" text-white ml-2"
				>
					<path
						d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
					/>
					<path d="M9 18c-4.51 2-5-2-7-2" />
				</svg>
			</button>
		</div>
	{/if}
	<div class="absolute top-2 right-8 pt-8 flex items-center space-x-4">
		{#if pb.authStore.isValid}
			{#if pb.authStore.model.avatar}
				<img
					src={pb.authStore.model.avatar}
					height="40"
					width="40"
					alt="User profile"
					class="rounded-full"
					style="aspect-ratio:40/40;object-fit:cover"
				/>
			{:else}
				<div class="w-10 h-10 rounded-full bg-black flex items-center justify-center">
					<p class="text-white text-xl">{pb.authStore.model.username[0].toUpperCase()}</p>
				</div>
			{/if}
			<div>
				<p class="text-sm text-gray-500">Logged in as</p>
				<p class="font-medium">{pb.authStore.model.username}</p>
			</div>
		{/if}
	</div>
</div>
