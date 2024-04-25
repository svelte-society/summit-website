<script lang="ts">
	import { page } from '$app/stores';
	import type { SponsorResponse } from '$lib/pocketbase-types';
	import Sponsor from './Sponsor.svelte';
	import Button from '$lib/components/Button.svelte';

	const { partner, platinum, gold, open_to_sponsorships } = $props<{
		partner: (SponsorResponse | undefined)[];
		platinum: (SponsorResponse | undefined)[];
		gold: (SponsorResponse | undefined)[];
		open_to_sponsorships: boolean;
	}>();
</script>

{#if open_to_sponsorships || (partner?.length > 0)}
	<article id="sponsors" class="bg-secondary text-black">
		<div class="grid gap-4 w-full sm:w-4/5 md:w-3/5 mx-auto px-4 md:py-16 py-8 text-center max-w-4xl">
			<h2 class="font-semibold text-2xl">Main Partner</h2>
			<hr class="border-black border-2 rounded-lg w-52 mx-auto" />
			<div class="grid gap-3">
				{#each partner as sponsor}
					<Sponsor {sponsor} is_platinum={true}>👑 Main Partner</Sponsor>
					{#if sponsor.snippet}
						<div class="bg-primary rounded-md py-6 px-8 text-left prose text-gray-100 prose-sm">
							{@html sponsor.snippet}
						</div>
					{/if}
				{/each}
				{#if open_to_sponsorships}
					<a
						class="bg-primary hover:brightness-110 transition-colors px-4 py-3 rounded-lg text-white font-semibold w-full sm:w-56 mx-auto"
						href="/{$page.params.year}/{$page.params.season}/sponsors">Become the main partner</a
					>
				{/if}
			</div>
		</div>
	</article>
{/if}

<article id="sponsors" class="bg-secondary text-black">
	<div class="grid gap-4 w-full sm:w-4/5 md:w-3/5 mx-auto px-4 md:py-16 py-8 text-center max-w-4xl">
		<h2 class="font-semibold text-2xl">Sponsors</h2>
		<hr class="border-black border-2 rounded-lg w-52 mx-auto" />
		<div class="grid gap-3">
			<ul class="grid grid-cols-1 gap-3">
				{#each platinum as sponsor}
					<Sponsor {sponsor} is_platinum={true}>💎 Platinum</Sponsor>
				{/each}
			</ul>
			<ul class="grid lg:grid-cols-3 grid-cols-2 gap-3">
				{#each gold as sponsor}
					<Sponsor is_platinum={false} {sponsor}>🏆 Gold</Sponsor>
				{/each}
			</ul>
		</div>
		{#if open_to_sponsorships}
			<a
				class="bg-primary hover:brightness-110 transition-colors px-4 py-3 rounded-lg text-white font-semibold w-full sm:w-56 mx-auto"
				href="/{$page.params.year}/{$page.params.season}/sponsors">Become a sponsor</a
			>
		{/if}
	</div>
</article>
