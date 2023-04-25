<script lang="ts">
	import type { SpeakersResponse } from '$lib/pocketbase-types';
	import Avatar from '$lib/components/Avatar.svelte';

	export let mcs: SpeakersResponse[];
</script>

<article class="bg-crystal-600 text-blac">
	<div class="grid gap-4 w-full sm:w-4/5 md:w-3/5 mx-auto px-4 pt-24 text-center">
		<h2 class="font-semibold text-2xl">Masters of Ceremony</h2>
		<hr class="border-black border-2 rounded-lg w-52 mx-auto" />
		<ul class="grid gap-4 max-w-4xl lg:grid-cols-2 text-left mx-auto">
			{#each mcs as { name, tagline, id, profile }}
				<li class="flex flex-col place-items-center gap-2 bg-violet-500 p-4 rounded-lg">
					{#if profile}
						<Avatar {name} {id} file={profile} size={80} />
					{/if}
					<span class="text-lg font-bold">{name}</span>
					<span class="text-center w-10/12">{tagline}</span>
				</li>
			{/each}
		</ul>
	</div>
</article>
