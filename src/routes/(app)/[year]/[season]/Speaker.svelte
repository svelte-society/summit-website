<script lang="ts">
	import type { SpeakersResponse } from '$lib/pocketbase-types';
	import Avatar from '$lib/components/Avatar.svelte';

	export let speaker: SpeakersResponse;
	const { id, profile, name, tagline, twitter } = speaker;
</script>

<li class="grid grid-cols-[auto_1fr] gap-2 max-w-xs">
	{#if profile}
		<Avatar {name} {id} file={profile} />
	{/if}
	<div class="flex flex-col">
		<a
			href="https://twitter.com/{twitter}"
			target="_blank"
			rel="noopener nofollower"
			class="flex flex-row gap-1 text-gray-200 font-bold text-sm place-items-center"
		>
			{name}
			<span class="w-3 h-3"
				><svg class="fill-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 20 20">
					<title>Twitter Icon</title><path
						fill-rule="evenodd"
						d="M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0 0 20 1.89a8.273 8.273 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.293a8.303 8.303 0 0 1-2.606.98 4.153 4.153 0 0 0-5.806-.175 4.006 4.006 0 0 0-1.187 3.86A11.717 11.717 0 0 1 1.392.738 4.005 4.005 0 0 0 2.663 6.13 4.122 4.122 0 0 1 .8 5.625v.051C.801 7.6 2.178 9.255 4.092 9.636a4.144 4.144 0 0 1-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 0 1 0 14.185a11.754 11.754 0 0 0 6.29 1.812"
					/></svg
				></span
			>
		</a>
		<span class="text-gray-300 text-xs">{tagline}</span>
	</div>
</li>
