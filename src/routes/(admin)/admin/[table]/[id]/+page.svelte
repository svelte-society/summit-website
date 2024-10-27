<script lang="ts">
import { page } from "$app/stores";
import { superForm } from "sveltekit-superforms/client";

const { data } = $props();

const { form, errors, constraints, enhance } = superForm(data.form, {
	taintedMessage: null,
	dataType: "json",
});
</script>

<div class="max-w-2xl mx-auto p-6">
    <h1 class="text-2xl font-semibold mb-6">Add New {$page.params.table}</h1>

    <form method="POST" use:enhance class="space-y-4">
        {#each Object.entries($form) as [field]}
            <div class="space-y-2">
                <label for={field} class="block text-sm font-medium text-gray-700 capitalize">
                    {field.replace('_', ' ')}
                </label>

                {#if field === 'description' || field === 'abstract' || field === 'bio'}
                    <textarea
                        id={field}
                        name={field}
                        bind:value={$form[field]}
                        rows="4"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        {...$constraints[field]}
                    ></textarea>
                {:else if field === 'level'}
                    <select
                        id={field}
                        name={field}
                        bind:value={$form[field]}
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                {:else if field === 'status'}
                    <select
                        id={field}
                        name={field}
                        bind:value={$form[field]}
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="draft">Draft</option>
                        <option value="submitted">Submitted</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Rejected</option>
                        <option value="confirmed">Confirmed</option>
                    </select>
                {:else}
                    <input
                        type={field.includes('date') ? 'date' :
                              field.includes('_at') ? 'datetime-local' :
                              field.includes('email') ? 'email' :
                              field.includes('url') ? 'url' :
                              field.includes('duration') || field.includes('max_') ? 'number' :
                              'text'}
                        id={field}
                        name={field}
                        bind:value={$form[field]}
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        {...$constraints[field]}
                    />
                {/if}

                {#if $errors[field]}
                    <p class="text-red-500 text-sm">{$errors[field]}</p>
                {/if}
            </div>
        {/each}

        <div class="flex justify-end space-x-3">
            <a
                href="/admin/{$page.params.table}"
                class="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
                Cancel
            </a>
            <button
                type="submit"
                class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
                Create
            </button>
        </div>
    </form>
</div>
