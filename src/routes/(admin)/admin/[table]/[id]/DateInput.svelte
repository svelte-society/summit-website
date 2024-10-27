<script>
import BaseField from "./BaseField.svelte";

let {
	label = "",
	value = $bindable(),
	error = "",
	min = undefined,
	max = undefined,
	helpText = "",
} = $props();

// Convert ISO date string to YYYY-MM-DD for input
let inputValue = $derived(value ? value.split("T")[0] : "");

function handleChange(event) {
	value = event.target.value ? new Date(event.target.value).toISOString() : "";
}
</script>

<BaseField {label} {error} {helpText}>
  <input
    type="date"
    value={inputValue}
    onchange={handleChange}
    {min}
    {max}
    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
  />
</BaseField>
