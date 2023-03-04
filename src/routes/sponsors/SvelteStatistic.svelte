<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	export let text: string;
	export let href: string;
	export let img: string;
	export let id: string;
</script>

<li>
	<a
		class="grid grid-cols-1 gap-2 bg-slate-900 rounded-lg p-2  transition-all elevation-2 hover:elevation-5 hover:scale-[1.02]"
		{href}
	>
		<picture>
			<source
				srcset="//wsrv.nl/?url={PUBLIC_API_URL}/files/svelte_stats/{id}/{img}&h=500&w=500&output=webp"
				type="image/webp"
			/>
			<img
				class="w-0 sm:w-full h-20 md:h-64 rounded-md object-cover"
				src="//wsrv.nl/?url={PUBLIC_API_URL}/files/svelte_stats/{id}/{img}&h=500&w=500"
				alt="Alt Text!"
			/>
		</picture>
		<h3 class="px-1">{text}</h3></a
	>
</li>
