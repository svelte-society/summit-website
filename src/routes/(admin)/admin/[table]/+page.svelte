<script>
import { enhance } from "$app/forms";
import { page } from "$app/stores";
import { superForm } from "sveltekit-superforms/client";

const { data } = $props();
const { form } = superForm(data.form);

function deleteEnhance(form) {
	return async ({ result }) => {
		if (result.type === "success") {
			// Optimistically remove the row from the table
			data.items = data.items.filter(
				(item) => item.id !== form.querySelector('input[name="id"]').value,
			);
		}
	};
}
</script>

<div>
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold capitalize">{$page.params.table}</h1>
        <a
            href="/admin/{$page.params.table}/new"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Add New
        </a>
    </div>

    <div class="bg-white rounded-lg shadow">
        <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
                <table class="min-w-full divide-y divide-gray-200">
                    {#if data.items.length > 0}
                        <thead class="bg-gray-50 sticky top-0">
                            <tr>
                                {#each Object.keys(data.items[0]) as header}
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px] bg-gray-50">
                                        <a
                                            href="?sort={header}&order={$form.sort === header && $form.order === 'asc' ? 'desc' : 'asc'}"
                                            class="hover:text-gray-700 flex items-center gap-1"
                                        >
                                            {header}
                                            {#if $form.sort === header}
                                                <span class="text-gray-900">
                                                    {$form.order === 'asc' ? '↑' : '↓'}
                                                </span>
                                            {/if}
                                        </a>
                                    </th>
                                {/each}
                                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] bg-gray-50 sticky right-0 shadow-[-4px_0_8px_-4px_rgba(0,0,0,0.1)]">                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            {#each data.items as item}
                                <tr class="hover:bg-gray-50 transition-colors">
                                    {#each Object.entries(item) as [key, value]}
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {#if key === 'id'}
                                                <a
                                                    href="/admin/{$page.params.table}/{value}"
                                                    class="text-blue-600 hover:text-blue-900"
                                                >
                                                    {value}
                                                </a>
                                            {:else}
                                                {value}
                                            {/if}
                                        </td>
                                    {/each}
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium sticky right-0 bg-white group-hover:bg-gray-50">                                        <form
                                            method="POST"
                                            action="?/delete"
                                            use:enhance
                                        >
                                            <input type="hidden" name="id" value={item.id} />
                                            <button
                                                type="submit"
                                                class="text-red-600 hover:text-red-900 font-medium flex items-center gap-1 ml-auto"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-4 w-4"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                Delete
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    {:else}
                        <tbody>
                            <tr>
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-center text-gray-500"
                                    colspan="100%"
                                >
                                    No records found
                                </td>
                            </tr>
                        </tbody>
                    {/if}
                </table>
            </div>
        </div>

        <div class="px-6 py-4 flex items-center justify-between border-t bg-white">
            <div class="flex items-center">
                <select
                    bind:value={$form.perPage}
                    class="border rounded px-2 py-1 text-sm"
                >
                    {#each [10, 25, 50, 100] as size}
                        <option value={size}>{size} per page</option>
                    {/each}
                </select>
            </div>

            <div class="flex gap-1">
                {#each Array.from({ length: data.pagination.totalPages }, (_, i) => i + 1) as pageNum}
                    <a
                        href="?page={pageNum}"
                        class="px-3 py-1 border rounded text-sm {
                            data.pagination.page === pageNum
                            ? 'bg-blue-500 text-white'
                            : 'hover:bg-gray-50'
                        }"
                    >
                        {pageNum}
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>
