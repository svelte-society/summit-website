<script>
	import { page } from '$app/stores';
	let {
		enhance,
		errors,
		form,
		constraints,
		action,
		submitting,
		submit_text = 'Submit',
		submitting_text = 'Submitting...'
	} = $props();
</script>

<div class="space-y-4">
	<div class="space-y-4 -ml-8 p-4 pl-8 rounded-md rounded-l-none bg-red-200 font-md">
		<h2 class="text-xl font-semibold">Instructions</h2>
		<p>
			You can submit at most two talks. You can edit your talk after submitting it but once the CFP
			is closed you won't be able to make any changes.
		</p>
		<p>
			Once the CFP closes we will review the talks and decide which ones get to selected. Expect an
			email a week or so after the CFP is closed.
		</p>
		<p>
			As a speaker you will get a free ticket, flights and accommodation paid for.
		</p>
	</div>
	<form method="POST" {action} use:enhance class="space-y-8">
		<div class="space-y-8">
			<div class="space-y-2">
				<label
					class="text-md font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="title">Title</label
				>
				<p class="text-sm" id="title_description">
					Please enter a clear and concise title. This title will be used throughout the conference.
				</p>
				<input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-bold placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="title"
					name="title"
					aria-describedby="title_description"
					aria-invalid={$errors.title ? 'true' : undefined}
					bind:value={$form.title}
					{...$constraints.title}
					placeholder="Enter the title of your talk"
				/>
			</div>

			<div class="space-y-2">
				<label
					class="text-md font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="description">Description</label
				>
				<p class="text-sm" id="description_description">
					The description of your talk should be a brief summary of what you will be presenting. It
					will be shown under your talk. <span class="font-bold"
						>Make sure it is no longer than one or two paragraphs</span
					>.
				</p>
				<textarea
					class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
					id="description"
					name="description"
					placeholder="Enter a brief description of your talk"
					rows="10"
					aria-describedby="description_description"
					aria-invalid={$errors.description ? 'true' : undefined}
					bind:value={$form.description}
					{...$constraints.description}
				/>
			</div>
			<div class="space-y-2 grid">
				<label
					class="text-md font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="format">Format</label
				>
				<p class="text-sm" id="format_description">
					The format of your talk. A regular talk is 30 minutes long.
				</p>
				<select
					class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					name="format"
					aria-describedby="format_description"
					aria-invalid={$errors.format ? 'true' : undefined}
					bind:value={$form.format}
					{...$constraints.format}
				>
					<option value="" disabled>Select the level of your talk</option>
					<option value="regular">Regular</option>
				</select>
			</div>
			<div class="space-y-2 grid">
				<label
					class="text-md font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="level">Level</label
				>
				<p class="text-sm" id="level_description">
					How advanced is your talk? Try to gauge the level of your talk. We aim to have a good mix
					of beginner, intermediate, and advanced talks.
				</p>
				<select
					class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					name="level"
					aria-describedby="level_description"
					aria-invalid={$errors.level ? 'true' : undefined}
					bind:value={$form.level}
					{...$constraints.level}
				>
					<option value="" disabled>Pick the level of your talk</option>
					<option value="beginner">Beginner</option>
					<option value="intermediate">Intermediate</option>
					<option value="advanced">Advanced</option>
				</select>
			</div>
			<div class="space-y-2">
				<label
					class="text-md font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="notes">Additional Notes</label
				>
				<p class="text-sm" id="notes_description">
					This will only be seen by the organizers. Any additional information about the talk should
					go here. For example, if you have given this talk before, or if you have any special
					requirements.
				</p>
				<textarea
					class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
					id="notes"
					name="notes"
					placeholder="Enter any additional notes or comments"
					aria-describedby="notes_description"
					aria-invalid={$errors.notes ? 'true' : undefined}
					bind:value={$form.notes}
					{...$constraints.notes}
				/>
			</div>
			<input hidden name="conference" type="text" value={$page.data.id} />
			<button
				disabled={$submitting}
				class="text-white inline-flex items-center justify-center rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-primary-foreground hover:bg-secondary/90 h-10 px-4 py-2 w-full"
				type="submit"
			>
				{$submitting ? submitting_text : submit_text}
			</button>
		</div>
	</form>
</div>
