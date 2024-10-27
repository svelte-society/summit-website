<!-- src/lib/components/form/fields/TextInput.svelte -->
<script>
import BaseField from "./BaseField.svelte";
let {
	label = "",
	value = $bindable(),
	error = "",
	placeholder = "",
	helpText = "",
	children,
} = $props();
</script>

<BaseField {label} {error} {helpText}>
  <input
    type="text"
    bind:value
    {placeholder}
    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
  />
</BaseField>
