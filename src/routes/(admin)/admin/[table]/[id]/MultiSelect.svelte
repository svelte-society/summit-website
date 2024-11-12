<script lang="ts">
import { SvelteSet } from "svelte/reactivity";
import BaseField from "./BaseField.svelte";

let {
	label = "",
	options = [],
	value = $bindable(),
	error = "",
	helpText = "",
} = $props();

let selected: string[] = $state([]);

$effect(() => {
	value = selected;
});
</script>

<BaseField {label} {error} {helpText}>
  <div class="space-y-2">
    {#each options as option}
      <label class="flex items-center space-x-2">
        <input
          type="checkbox"
          name="hellnaw"
          value={option.id}
          bind:group={selected}
          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <span>{option.label}</span>
      </label>
    {/each}
  </div>
</BaseField>
