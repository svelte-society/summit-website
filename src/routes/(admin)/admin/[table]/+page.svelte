<script>
import { page } from "$app/stores";
import { superForm } from "sveltekit-superforms/client";

const { data } = $props();

const { form } = superForm(data.form);
</script>

<div>
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold capitalize">{$page.params.table}</h1>
        <a href="/admin/{$page.params.table}/new" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New
        </a>
    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            {#if data.items.length > 0}
                <thead class="bg-gray-50">
                    <tr>
                        {#each Object.keys(data.items[0]) as header}
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <a href="?sort={header}&order={$form.sort === header && $form.order === 'asc' ? 'desc' : 'asc'}"
                                   class="hover:text-gray-700">
                                    {header}
                                    {#if $form.sort === header}
                                        {$form.order === 'asc' ? '↑' : '↓'}
                                    {/if}
                                </a>
                            </th>
                        {/each}
                        <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    {#each data.items as item}
                        <tr
                            class="hover:bg-gray-50 transition-colors"
                        >
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
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button class="text-red-600 hover:text-red-900">Delete</button>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            {:else}
                <tbody>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-center" colspan="100%">
                            No records found
                        </td>
                    </tr>
                </tbody>
            {/if}
        </table>

        <div class="px-6 py-4 flex items-center justify-between border-t">
            <div class="flex items-center">
                <select
                    bind:value={$form.perPage}
                    class="border rounded px-2 py-1"
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
                        class="px-3 py-1 border rounded {data.pagination.page === pageNum ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'}"
                    >
                        {pageNum}
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>
