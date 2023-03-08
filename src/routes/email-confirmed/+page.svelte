<script>
	import Button from '$lib/components/Button.svelte';
</script>

<div class="cover">
	<div class="cover-center grid place-items-center gap-6">
		<h1 class="font-display text-5xl text-center">Thank you! Your email is now confirmed.</h1>
	</div>
	<div class="mx-auto">
		<div class="grid place-items-center md:flex-row w-full gap-3 px-">
			<p>Go back to the landing page 👇</p>
			<Button wide secondary href="/">Go back!</Button>
		</div>
	</div>
</div>
