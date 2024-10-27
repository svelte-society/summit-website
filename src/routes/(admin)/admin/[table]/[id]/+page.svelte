<script lang="ts">
import { page } from "$app/stores";
import { conferenceFields } from "$lib/schemas";
import { superForm } from "sveltekit-superforms/client";
import DynamicForm from "./DynamicForm.svelte";

const { data } = $props();

const { form, errors, constraints, enhance } = superForm(data.form, {
	taintedMessage: null,
	dataType: "json",
});
</script>

<div class="max-w-2xl mx-auto p-6">
    <h1 class="text-2xl font-semibold mb-6">Add New {$page.params.table}</h1>

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
                Create
            </button>
        </div>
    </form>
</div>
