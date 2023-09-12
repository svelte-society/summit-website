<script>
	import Button from '$lib/components/Button.svelte';
</script>

<article id="speakers" class="bg-blue-600 text-black">
	<div class="mx-auto px-4 md:py-14 py-8 max-w-6xl">
		<div
			class="flex flex-col gap-4 w-full sm:w-3/5 md:w-4/5 mx-auto p-6 rounded-md bg-sky-600 text-white"
		>
			<h2 class="font-semibold text-xl">Want to speak at the conference?</h2>
			<p>
				We're super stoked to see what kind of talks that will be submitted this year! If you're
				interested in speaking at the conference, please head on over to our submission link below!
				This event is all online and all talks should be pre-recorded.
			</p>
			<div class="w-full sm:w-56 mx-auto text-center">
				<Button external primary wide href="https://sessionize.com/svelte-summit-spring-2023/"
					>Call For Proposals</Button
				>
			</div>
		</div>
	</div>
</article>
