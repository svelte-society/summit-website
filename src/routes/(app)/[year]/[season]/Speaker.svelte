<script lang="ts">
	import type { SpeakerResponse } from '$lib/pocketbase-types';
	import Avatar from '$lib/components/Avatar.svelte';

	const { speaker } = $props<{ speaker: SpeakerResponse }>();
	const { id, avatar, name, tagline, twitter, collectionId, picture, username } = speaker;
</script>

<li class="grid grid-cols-[auto_1fr] gap-2 max-w-xs">
	{#if avatar}
		<Avatar {name} {id} {collectionId} file={picture} url={avatar} />
	{/if}
	<div class="flex flex-col">
		{#if !username}
			<svelte:element
			this={twitter ? 'a' : 'div'}
			href={twitter ? 'https://twitter.com/' + twitter : ''}
			target="_blank"
			rel="noopener nofollower"
			class="flex flex-row gap-1 text-black font-bold text-sm place-items-center"
			>
				{name || username}
				{#if twitter}
					<span class="w-3 h-3"
						><svg class="fill-black" vc xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 20 20">
							<title>Twitter Icon</title><path
								fill-rule="evenodd"
								d="M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0 0 20 1.89a8.273 8.273 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.293a8.303 8.303 0 0 1-2.606.98 4.153 4.153 0 0 0-5.806-.175 4.006 4.006 0 0 0-1.187 3.86A11.717 11.717 0 0 1 1.392.738 4.005 4.005 0 0 0 2.663 6.13 4.122 4.122 0 0 1 .8 5.625v.051C.801 7.6 2.178 9.255 4.092 9.636a4.144 4.144 0 0 1-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 0 1 0 14.185a11.754 11.754 0 0 0 6.29 1.812"
							/></svg
						></span
					>
				{/if}
			</svelte:element>
		{:else}
			<svelte:element
			this={username ? 'a' : 'div'}
			href={username ? 'https://github.com/' + username : ''}
			target="_blank"
			rel="noopener nofollower"
			class="flex flex-row gap-1 text-black font-bold text-sm place-items-center"
			>
				{name || username}
				{#if username}
					<span class="w-4 h-4"
					
						>
						<svg viewBox="0 0 24 24" aria-hidden="true" class="fill-black"><title>GitHub Icon</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>
						</span
					>
				{/if}
			</svelte:element>
	
		{/if}
		<span class="text-black/80 text-xs">{tagline}</span>
	</div>
</li>
