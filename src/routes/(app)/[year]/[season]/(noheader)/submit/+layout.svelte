<script>
	import { page } from '$app/stores';

    const { children, data } = $props()
</script>

<div class="p-8 bg-white rounded-xl shadow-lg relative max-w-4xl mx-auto">
    {@render children()}

    {#if data.user}
        <div
            class="absolute top-2 right-8 mt-4 p-2 flex items-center space-x-4 rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-300 transition-shadow"
        >
            <img
                src="https://github.com/{data.user.username}.png"
                height="40"
                width="40"
                alt="User profile"
                class="rounded-full border-2 outline-2 border-black"
                style="aspect-ratio:40/40;object-fit:cover"
            />
            <div>
                <p class="text-sm text-gray-500">Logged in as</p>
                <p class="font-medium">{data.user.name || data.user.username}</p>
            </div>

            <a
                class="bg-gray-100 text-primary font-semibold hover:bg-gray-200 rounded-md transition-colors"
                href="/logout?referrer={$page.url.pathname}"
                ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 p-1">
                    <title>Logout</title>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                    </svg></a>
                               
        </div>
    {/if}
</div>
