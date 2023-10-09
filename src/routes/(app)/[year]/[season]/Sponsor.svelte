<script lang="ts">
	import type { SponsorsResponse } from '../lib/pocketbase-types';
	import { PUBLIC_API_URL } from '$env/static/public';

	export let sponsor: SponsorsResponse | undefined;

	console.log(sponsor);

	export let is_platinum = false;

	const height = is_platinum ? 100 : 75;
	const fallback = is_platinum ? '💎 Platinum' : '🏆 Gold';
</script>

{#if sponsor}
	<li class="bg-blue-800 p-10 rounded-md text-white gap-3 hover:scale-[1.02] transition-transform">
		<a href={sponsor.href} target="_blank" rel="noreferrer">
			<picture>
				{#if !sponsor.logo.endsWith('.svg')}
					<!-- load webp if supported -->
					<source
						srcset="//wsrv.nl/?url={PUBLIC_API_URL}/files/{sponsor.collectionId}/{sponsor.id}/{sponsor.logo}&h={height *
							2}&output=webp"
						type="image/webp"
					/>
					<!-- load in case no `source` format applies 
									  and use attributes for presentation -->
					<img
						height="{height}px max-h-28"
						class="mx-auto"
						src="//wsrv.nl/?url={PUBLIC_API_URL}/files/{sponsor.collectionId}/{sponsor.id}/{sponsor.logo}&h={height *
							2}"
						alt="{sponsor.name} logo"
					/>
				{:else}
					<img
						class="mx-auto max-h-28"
						src="{PUBLIC_API_URL}/files/{sponsor.collectionId}/{sponsor.id}/{sponsor.logo}"
						alt="{sponsor.name} logo"
					/>
				{/if}
			</picture>
		</a>
	</li>
{:else}
	<li
		class:py-12={is_platinum}
		class="bg-blue-800 rounded-md p-8 text-white gap-3 hover:scale-[1.02] transition-transform grid place-items-center"
	>
		<a href="/sponsors">{fallback}</a>
	</li>
{/if}
