<script>
	export let sponsors = {
		platinum: [
			{
				name: '💎 Platinum',
				href: '/sponsors',
				snippet: ''
			},
			{
				name: '💎 Platinum',
				href: '/sponsors',
				snippet: ''
			},
			{
				name: '💎 Platinum',
				href: '/sponsors',
				snippet: ''
			}
		],
		gold: [
			{
				name: '🥇 Gold',
				href: '/sponsors',
				snippet: ''
			},
			{
				name: '🥇 Gold',
				href: '/sponsors',
				snippet: ''
			},
			{
				name: '🥇 Gold',
				href: '/sponsors',
				snippet: ''
			},
			{
				name: '🥇 Gold',
				href: '/sponsors',
				snippet: ''
			},
			{
				name: '🥇 Gold',
				href: '/sponsors',
				snippet: ''
			}
		]
	};
</script>

<article id="sponsors" class="bg-papaya-400 text-black">
	<div class="grid gap-4 w-full sm:w-4/5 md:w-3/5 mx-auto px-4 md:py-16 py-8 text-center max-w-4xl">
		<h2 class="font-semibold text-2xl">Sponsors</h2>
		<hr class="border-black border-2 rounded-lg w-52 mx-auto" />
		<div class="grid gap-3">
			<ul class="grid grid-cols-1 gap-3">
				{#each sponsors.platinum as { name, href, snippet }}
					<li
						class="bg-slate-900 rounded-md p-8 text-white gap-3 hover:scale-[1.02] transition-transform"
					>
						<a {href}>{name}</a>
					</li>
				{/each}
			</ul>
			<ul class="grid lg:grid-cols-3 grid-cols-2 gap-3">
				{#each sponsors.gold as { name, href, snippet }}
					<li
						class="bg-slate-900 rounded-md p-8 text-white gap-3 hover:scale-[1.02] transition-transform"
					>
						<a {href}>{name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<a
			class="bg-crystal-800 hover:bg-crystal-700 transition-colors px-4 py-3 rounded-lg text-white font-semibold w-full sm:w-56 mx-auto"
			href="/sponsors">Become a sponsor</a
		>
	</div>
</article>
