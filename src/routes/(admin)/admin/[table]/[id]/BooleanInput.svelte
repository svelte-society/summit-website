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
      class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  </div>
</BaseField>
