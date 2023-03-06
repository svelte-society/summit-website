<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';

	export let type: 'platinum' | 'gold';
	export let id: string;
	export let logo: string;
	export let href: string;
	export let is_platinum = false;

	const height = is_platinum ? 300 : 150;
	const fallback = is_platinum ? '💎 Platinum' : '🏆 Gold';
</script>

{#if type}
	<li
		class:py-12={is_platinum}
		class="bg-slate-900 rounded-md text-white gap-3 hover:scale-[1.02] transition-transform"
	>
		<a {href}>
			<picture>
				<!-- load webp if supported -->
				<source
					srcset="//wsrv.nl/?url={PUBLIC_API_URL}/files/sponsors/{id}/{logo}&h={height}&output=webp"
					type="image/webp"
				/>
				<!-- load in case no `source` format applies 
										  and use attributes for presentation -->
				<img
					class="mx-auto max-h-16"
					src="//wsrv.nl/?url={PUBLIC_API_URL}/files/sponsors/{id}/{logo}&h=300"
					alt="Alt Text!"
				/>
			</picture>
		</a>
	</li>
{:else}
	<li
		class:py-12={is_platinum}
		class="bg-slate-900 rounded-md p-8 text-white gap-3 hover:scale-[1.02] transition-transform"
	>
		<a href="/sponsors">{fallback}</a>
	</li>
{/if}
