<script lang="ts">
	export let color: string;
	export let value: string;
	export let unit: string;
	export let description: string;
</script>

<li
	class="flex flex-col place-content-center place-items-center gap-0 h-32 bg-slate-900 rounded-lg text-slate-100 transition-all elevation-2 hover:elevation-5 hover:scale-[1.02]"
>
	<span class="text-5xl font-bold" style="color: {color}"
		>{value}<small class="text-2xl">{unit}</small></span
	>
	<span>{description}</span>
</li>
