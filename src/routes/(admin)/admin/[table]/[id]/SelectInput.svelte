<script>
import BaseField from "./BaseField.svelte";

let {
	label = "",
	value = $bindable(),
	error = "",
	options = [],
	helpText = "",
} = $props();
</script>

<BaseField {label} {error} {helpText}>
  <select
    bind:value
    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
  >
    <option value="">Select...</option>
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
</BaseField>
