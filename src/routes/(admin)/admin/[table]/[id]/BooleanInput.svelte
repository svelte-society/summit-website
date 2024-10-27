<script>
import BaseField from "./BaseField.svelte";

let {
	label = "",
	value = $bindable(false),
	error = "",
	helpText = "",
} = $props();
</script>

<BaseField {label} {error} {helpText}>
  <div class="flex items-center">
    <input
      type="checkbox"
      bind:checked={value}
      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
    />
  </div>
</BaseField>
