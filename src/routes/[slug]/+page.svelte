<script lang="ts">
	export let data;
</script>

<div class="pt-28">
	<div class="rounded-xl overflow-auto p-8 aspect-video w-full bg-slate-400 h-96">
		<iframe
			title="{data.talk.title} YouTube video"
			class="rounded-lg shadow-lg"
			src="https://www.youtube.com/embed/0bog8-Ay7CU"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
	<a href="/">⬅️ Go Back</a>
	<h1 class="text-3xl font-bold">{data.talk.title}</h1>
</div>
<div class="aspect-w-16 aspect-h-9">
	<iframe
		src="https://www.youtube.com/embed/r9jwGansp1E"
		class="rounded-lg shadow-lg"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</div>
