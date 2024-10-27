
<script>
import BaseField from "./BaseField.svelte";

let {
	label = "",
	value = $bindable(),
	error = "",
	placeholder = "",
	rows = 3,
	helpText = "",
} = $props();
</script>

<BaseField {label} {error} {helpText}>
  <textarea
    bind:value
    {placeholder}
    {rows}
    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
  ></textarea>
</BaseField>
