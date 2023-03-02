<script>
	import Button from '$lib/components/Button.svelte';
</script>

<article class="bg-crystal-600 text-black">
	<div class="mx-auto px-4 md:py-14 py-8 max-w-6xl">
		<div
			class="flex flex-col gap-4 w-full sm:w-3/5 md:w-4/5 mx-auto p-6 rounded-md bg-gray-800 text-white "
		>
			<h2 class="font-semibold text-xl">Want to speak at the conference?</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam explicabo rem mollitia
				consectetur libero dolore iusto architecto veniam temporibus, dolorum molestias modi ipsum
				voluptatem ipsam. Aspernatur iste laboriosam nemo iusto!
			</p>
			<div class="w-full sm:w-56 mx-auto text-center">
				<Button external secondary wide href="https://sessionize.com/svelte-summit-spring-2023/"
					>Call For Proposals</Button
				>
			</div>
		</div>
	</div>
</article>
