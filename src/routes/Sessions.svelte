<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';

	export let sessions;
</script>

<article class="bg-crystal-600 text-black">
	<div class="grid gap-4 w-full sm:w-4/5 md:w-3/5 mx-auto px-4 py-24 text-center">
		<h2 class="font-semibold text-2xl">Speakers</h2>
		<hr class="border-black border-2 rounded-lg w-52 mx-auto" />
		<ul class="grid gap-4 max-w-4xl lg:grid-cols-2 text-left">
			{#each sessions as { title, description, expand }}
				{@const speakers = expand?.speakers}
				<li class="grid gap-2 bg-primary rounded-md p-5 text-white">
					<h3 class="text-lg font-semibold leading-6">{title}</h3>
					<div>
						{@html description}
					</div>
					<ul class="grid grid-cols-2">
						{#each speakers || [] as { bio, id, name, profile, tagline, twitter }}
							<li class="grid grid-cols-[auto_1fr] gap-2">
								<picture>
									<!-- load webp if supported -->
									<source
										srcset="//wsrv.nl/?url={PUBLIC_API_URL}/files/speakers/{id}/{profile}&w=80&output=webp"
										type="image/webp"
									/>
									<!-- load in case no `source` format applies 
															  and use attributes for presentation -->
									<img
										class="rounded-full"
										width="40px"
										src="//wsrv.nl/?url={PUBLIC_API_URL}/files/speakers/{id}/{profile}&w=80"
										alt="{name} logo"
									/>
								</picture>
								<div class="flex">
									<div class="text-gray-300 text-sm">{name}</div>
								</div>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</div>
</article>
