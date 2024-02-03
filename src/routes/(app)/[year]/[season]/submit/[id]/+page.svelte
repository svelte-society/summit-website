<script>
	import { superForm } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';

	let { data } = $props();

	const { form, errors, constraints, enhance } = superForm(data.form, {
		clearOnSubmit: 'errors-and-message'
	});
</script>

<div class="space-y-2">
	<a href="/{$page.params.year}/{$page.params.season}/submit/">⬅️ Back</a>
	<h2 class="text-3xl font-bold">Edit talk</h2>
	<p class="text-zinc-600">Edit any fields below to update your talk.</p>
</div>
<form class="flex items-start space-x-8 mt-4" method="POST" use:enhance>
	<div class="w-full space-y-8">
		<div class="space-y-4">
			<div class="space-y-2">
				<label
					class="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="title">Title</label
				><input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-bold placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
					class="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
					class="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
					class="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
					class="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
			<input hidden name="conference" type="text" value={$page.data.id} />
			<button
				class="text-white inline-flex items-center justify-center rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-primary-foreground hover:bg-secondary/90 h-10 px-4 py-2 w-full"
				type="submit"
			>
				Update Talk
			</button>
		</div>
	</div>
</form>
