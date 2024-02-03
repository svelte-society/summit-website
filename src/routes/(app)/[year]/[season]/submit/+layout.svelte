<script>
    const { children, data } = $props()
</script>

<div class="p-8 bg-white rounded-xl shadow-lg relative max-w-3xl mx-auto">
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
        </div>
    {/if}
</div>
