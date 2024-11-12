<script lang="ts">
import { page } from "$app/stores";
import { superForm } from "sveltekit-superforms/client";
import DynamicForm from "./DynamicForm.svelte";

let { data } = $props();

let { form, errors, enhance } = superForm(data.form, {
	taintedMessage: null,
	dataType: "json",
});

let isEditing = !$page.url.pathname.endsWith("/new");
</script>

<div class="max-w-2xl mx-auto p-6">
    <h1 class="text-2xl font-semibold mb-6">{isEditing ? 'Edit' : 'Add'} {$page.params.table}</h1>

    <form method="POST" use:enhance class="space-y-4">
        <DynamicForm {form} {errors} fields={data.fields} />

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
                {isEditing ? 'Update' : 'Create'}
            </button>
        </div>
    </form>
</div>
