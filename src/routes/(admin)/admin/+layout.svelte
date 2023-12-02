<script>
	import { page } from '$app/stores';
	import MenuItem from './MenuItem.svelte';

	const { data } = $props();
</script>

<div class="flex h-screen">
	<aside class="w-64 bg-gray-800 text-white flex flex-col justify-between">
		<div>
			<div class="flex items-center justify-center h-20 bg-slate-700">
				<h1 class="text-xl font-semibold">Admin</h1>
			</div>
			<nav class="flex flex-col p-4 space-y-2">
				<MenuItem href="/admin" text="Dashboard" active={$page.url.href.endsWith('/admin')} />
				<MenuItem
					href="/admin/conferences"
					text="Conferences"
					active={$page.url.href.includes('/conference')}
				>
					<MenuItem
						href="/admin/conferences/new"
						text="New"
						active={$page.url.href.endsWith('/admin/conferences/new')}
					/>
					<MenuItem
						href="/admin/conferences/edit"
						text="Edit"
						active={$page.url.href.endsWith('/admin/conferences/edit')}
					/>
				</MenuItem>
				<MenuItem href="/admin/talks" text="Talks" active={$page.url.href.includes('/talks')} />
				<MenuItem
					href="/admin/analytics"
					text="Analytics"
					active={$page.url.href.includes('/analytics')}
				/>
			</nav>
		</div>
		<div>
			<div class="flex flex-col p-4 space-y-2">
				<MenuItem href="#" text="My Account" />
				<MenuItem href="#" text="Settings" />
			</div>
			<div class="flex items-center p-4 bg-slate-700">
				<span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
					<span class="flex h-full w-full items-center justify-center rounded-full bg-muted"
						>JD</span
					>
				</span>
				<div class="ml-4">
					<div class="text-sm font-medium">John Doe</div>
					<div class="text-xs text-gray-400">johndoe@example.com</div>
				</div>
			</div>
		</div>
	</aside>
	<main
		class="flex-1 bg-gray-100 p-8 overflow-auto grid grid-cols-2 gap-4 grid-flow-dense content-start"
	>
		<slot />
	</main>
</div>
