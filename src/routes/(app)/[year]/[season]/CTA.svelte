<script>
	import Button from '$lib/components/Button.svelte';
	const { title, text, href } = $props();
	// export let title = 'Want to speak at the conference?';
	// export let text = `We're super stoked to see what kind of talks that will be submitted this year! If you're
	// 			interested in speaking at the conference, please head on over to our submission link below!
	// 			This event is all online and all talks should be pre-recorded.`;
	// export let href = 'https://sessionize.com/svelte-summit-fall-2023/';
</script>

<article id="speakers" class="bg-primary">
	<div class="mx-auto px-4 md:py-14 py-8 max-w-6xl">
		<div
			class="flex flex-col gap-4 w-full sm:w-3/5 md:w-4/5 mx-auto p-6 rounded-md bg-secondary text-black"
		>
			<h2 class="font-semibold text-xl">{title}</h2>
			<p>
				{text}
			</p>
			<div class="w-full sm:w-56 mx-auto text-center">
				<Button external primary wide {href}>Call For Proposals</Button>
			</div>
		</div>
	</div>
</article>
