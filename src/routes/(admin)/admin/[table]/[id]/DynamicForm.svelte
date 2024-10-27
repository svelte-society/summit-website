<!-- src/lib/components/form/DynamicForm.svelte -->
<script>
import { fieldComponents } from "./fieldComponents";

let { fields = {}, form, errors } = $props();
</script>

<div class="space-y-6">
  {#each Object.entries(fields) as [name, field]}
    {#if fieldComponents.has(field.type)}
        {@const FieldComponent = fieldComponents.get(field.type)}
        <FieldComponent bind:value={$form[name]}
            error={$errors[name]}
            {...field} />
    {/if}
  {/each}
</div>
