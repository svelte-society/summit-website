<script lang="ts">
	import { img_url } from '$lib/utils';
	import type { SponsorResponse } from '$lib/pocketbase-types';
	import { PUBLIC_API_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';

	const { is_platinum = false, sponsor, children } = $props<{
		sponsor: SponsorResponse | undefined;
		is_platinum: boolean;
		children: Snippet;
	}>();

	const height = is_platinum ? 100 : 75;
</script>

{#if sponsor}
	<li class="bg-primary p-10 rounded-md text-white gap-3 hover:scale-[1.02] transition-transform">
		<a href={sponsor.href} target="_blank" rel="noreferrer">
			<picture>
				{#if !sponsor.logo.endsWith('.svg')}
					<!-- load webp if supported -->
					<source
						srcset={img_url(`${PUBLIC_API_URL}/api/files/${sponsor.collectionId}/${sponsor.id}/${sponsor.logo}`, {
							width: height * 2,
							format: 'webp',
							quality: 70
						})}
						type="image/webp"
					/>
					<!-- load in case no `source` format applies 
									  and use attributes for presentation -->
					<img
						{height}
						class="mx-auto max-h-28 w-full"
						src={img_url(`${PUBLIC_API_URL}/api/files/${sponsor.collectionId}/${sponsor.id}/${sponsor.logo}`, {
							width: height * 3.5,
							quality: 70
						})}
						alt="{sponsor.name} logo"
					/>
				{:else}
					<img
						class="mx-auto max-h-28"
						src="{PUBLIC_API_URL}/api/files/{sponsor.collectionId}/{sponsor.id}/{sponsor.logo}"
						alt="{sponsor.name} logo"
					/>
				{/if}
			</picture>
		</a>
	</li>
{:else}
	<li
		class:py-12={is_platinum}
		class="bg-primary rounded-md p-8 text-white gap-3 hover:scale-[1.02] transition-transform grid place-items-center"
	>
		<a href="/{$page.params.year}/{$page.params.season}/sponsors">{@render children()}</a>
	</li>
{/if}
