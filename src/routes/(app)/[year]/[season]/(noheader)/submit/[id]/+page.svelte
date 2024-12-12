<script>
	import { superForm } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';

	let { data } = $props();

	const { form, errors, constraints, enhance, submitting } = superForm(data.form, {
		clearOnSubmit: 'errors-and-message'
	});

	import TalkForm from '../TalkForm.svelte';
</script>

<div class="space-y-2">
	<a href="/{$page.params.year}/{$page.params.season}/submit/">⬅️ Back</a>
	<h2 class="text-3xl font-bold">Edit talk</h2>
	<p class="text-zinc-600">Edit any fields below to update your talk.</p>
</div>
<TalkForm
	{form}
	{errors}
	{constraints}
	{enhance}
	{submitting}
	submit_text="Update talk"
	submitting_text="Updating..."
/>
