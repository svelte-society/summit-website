<script lang="ts">
	import { onMount } from 'svelte';
	import { wrapTextToFit, downloadCanvasAsPng, drawCircularImage } from './helpers.js';
	export let data;

	let canvases: HTMLCanvasElement[] = new Array(data.sessions.length);

	type Position = {
		x: number;
		y: number;
	};

	async function createCombinedImage(
		canvas,
		bgImageUrl: string,
		profileImageUrls: string[],
		text1: string,
		text2: string,
		text1Pos: Position,
		text2Pos: Position,
		profilePos: Position
	): Promise<void> {
		// Load an image from a URL
		function loadImage(src: string): Promise<HTMLImageElement> {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.crossOrigin = 'Anonymous';
				img.onload = () => resolve(img);
				img.onerror = () => reject(new Error(`Failed to load image ${src}`));
				img.src = src;
			});
		}

		// Draw a circle around the profile picture
		const context = canvas.getContext('2d');
		if (!context) return;
		const [bgImage, ...profileImages] = await Promise.all([
			loadImage(bgImageUrl),
			...profileImageUrls.map((url) => loadImage(url))
		]);

		// Set canvas size to match the background image
		canvas.width = bgImage.width;
		canvas.height = bgImage.height;

		// Draw the background image
		context.drawImage(bgImage, 0, 0);

		// Draw the clipped profile picture

		const profileRadius = 286 / 2; // Set the desired radius for the profile picture
		profileImages.forEach((img, i) => {
			drawCircularImage(
				context,
				img,
				profilePos.x + profileRadius * i * 1.3,
				profilePos.y,
				profileRadius,
				'#FF6C6C',
				0.5,
				'#3B006A',
				8
			);
		});

		// Draw the text
		context.font = '500 98px Overpass';
		context.fillStyle = '#FF6C6C';
		context.fillText(text1, text1Pos.x, text1Pos.y);
		context.fillStyle = 'white';
		const { text, fontSize } = wrapTextToFit(context, text2, 1557, 279, 2, 'bold 200px Overpass');

		// Draw the wrapped text line by line
		context.font = `500 ${fontSize}px Overpass`; // Use the adjusted font size
		text.lines.forEach((line, index) => {
			context.fillText(line, text2Pos.x, text2Pos.y + context.measureText('M').width * 1.4 * index);
		});
	}

	// Example usage:
	const bgImageUrl = '/thumbnail_generator/background.png';
	const name_pos = { x: 124, y: 550 };
	const title_pos = { x: 114, y: 621 };
	const profilePos = { x: 124, y: 124 };

	async function generateImages() {
		if (!canvases) return;
		canvases.forEach(async (canvas, i) => {
			const session = data.sessions[i];
			const profileUrls = data.sessions[i].speakers.map(({ profile_url }) => profile_url);
			console.log(profileUrls);
			const name_text = data.sessions[i].speakers.map(({ name }) => name).join(' & ');
			const { title } = session;
			await createCombinedImage(
				canvas,
				bgImageUrl,
				profileUrls,
				name_text,
				title,
				name_pos,
				title_pos,
				profilePos
			);

			downloadCanvasAsPng(canvas, `Thumbnail - ${title}.png`);
		});
	}
</script>

<div class="m-4">
	<div class="flex flex-wrap gap-2 place-items-center">
		<h1 class="text-2xl font-bold">Generate Thumbnails from Sessions</h1>
		<button class="px-4 py-2 bg-secondary text-gray-50 rounded-md" on:click={generateImages}
			>Generate</button
		>
	</div>

	<ul class="flex flex-wrap gap-1">
		{#each data.sessions as { title }, idx}
			<canvas class="max-w-md" width="448" height="252" bind:this={canvases[idx]} />
		{/each}
	</ul>
</div>
