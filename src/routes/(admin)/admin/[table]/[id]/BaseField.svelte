<script>
let { label = "", error = "", helpText = "", children } = $props();
</script>

<div class="space-y-1">
  {#if label}
    <label class="block text-sm font-medium text-gray-700">
      {label}
    </label>
  {/if}

  {@render children()}

  {#if helpText}
    <p class="text-sm text-gray-500">{helpText}</p>
  {/if}

  {#if error}
    <p class="text-sm text-red-600">{error}</p>
  {/if}
</div>
