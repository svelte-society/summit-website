<!-- src/lib/components/form/fields/URLInput.svelte -->
<script>
import BaseField from "./BaseField.svelte";

let {
	label = "",
	value = $bindable(),
	error = "",
	placeholder = "https://",
	helpText = "",
} = $props();
</script>

<BaseField {label} {error} {helpText}>
  <input
    type="url"
    bind:value
    {placeholder}
    pattern="https?://.*"
    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
  />
</BaseField>
