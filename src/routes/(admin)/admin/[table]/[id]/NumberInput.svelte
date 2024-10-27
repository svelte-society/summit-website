<script>
import BaseField from "./BaseField.svelte";

let {
	label = "",
	value = $bindable(),
	error = "",
	min = undefined,
	max = undefined,
	step = 1,
	placeholder = "",
	helpText = "",
} = $props();
</script>

<BaseField {label} {error} {helpText}>
  <input
    type="number"
    bind:value
    {min}
    {max}
    {step}
    {placeholder}
    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
  />
</BaseField>
