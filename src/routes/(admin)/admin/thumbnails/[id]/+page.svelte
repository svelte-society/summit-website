<script lang="ts">
	import ring_svg from './ring_svg_summit.svg?raw';
	import { convertToHex } from '$lib/utils.js';
	import { wrapTextToFit, downloadCanvasAsPng, drawCircularImage } from './helpers.js';
	export let data;

	let canvases: HTMLCanvasElement[] = new Array(data.talks.length);

	type Position = {
		x: number;
		y: number;
	};

	async function createCombinedImage(
		canvas: HTMLCanvasElement,
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
		canvas.width = 1920;
		canvas.height = 1080;
		context.fillStyle = convertToHex(data.primary_color);
		context.fillRect(0, 0, 1920, 1080);

		// Draw background SVG Circle
		drawColoredSVGOnCanvas('ring', convertToHex(data.secondary_color), context, () => {
			// Draw the text
			context.font = '500 98px Overpass';
			context.fillStyle = convertToHex(data.secondary_color);
			context.fillText(text1, text1Pos.x, text1Pos.y);
			context.fillStyle = 'white';
			const { text, fontSize } = wrapTextToFit(context, text2, 1557, 279, 2, 'bold 200px Overpass');

			// Draw the wrapped text line by line
			context.font = `500 ${fontSize}px Overpass`; // Use the adjusted font size
			text.lines.forEach((line, index) => {
				context.fillText(
					line,
					text2Pos.x,
					text2Pos.y + context.measureText('M').width * 1.4 * index
				);
			});

			const profileRadius = 286 / 2; // Set the desired radius for the profile picture
			profileImages.forEach((img, i) => {
				drawCircularImage(
					context,
					img,
					profilePos.x + profileRadius * i * 1.3,
					profilePos.y,
					profileRadius,
					convertToHex(data.primary_color),
					0.5,
					convertToHex(data.secondary_color),
					8
				);
			});

			drawSvelteSummitText(context, 1700, 50, 'SPRING');
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
			const session = data.talks[i];
			const profileUrls = data.talks[i].speakers.map(({ picture }) => picture);
			const name_text = data.talks[i].speakers.map(({ name }) => name).join(' & ');
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

			// downloadCanvasAsPng(canvas, `Thumbnail - ${title}.png`);
		});
	}

	function drawColoredSVGOnCanvas(svgId, color, ctx, callback) {
		// Clone the original SVG element to avoid modifying it directly
		const node = document.getElementById(svgId);
		const clonedSvgElement = node.cloneNode(true);

		// Find all the path elements in the SVG and change their fill
		const paths = clonedSvgElement.querySelectorAll('path');
		paths.forEach((path) => {
			path.setAttribute('fill', color + '99');
		});

		// Serialize the cloned SVG with the new color
		const xml = new XMLSerializer().serializeToString(clonedSvgElement);

		// Create an Image to load the SVG into
		const img = new Image();
		img.onload = function () {
			// Draw the SVG image onto the canvas
			ctx.drawImage(img, 500 - img.width + 250, -170, img.width * 2, img.height * 2);

			if (callback) {
				callback();
			}
		};
		// Convert the SVG XML to a data URL and set it as the source of the image
		img.src = 'data:image/svg+xml;base64,' + btoa(xml);
	}

	function drawSvelteSummitText(ctx, x, y, dynamicText) {
		const lineHeight = 100; // Adjust line height as needed

		// Set text style for 'SVELTE'
		ctx.font = '500 90px Anton';
		ctx.fillStyle = 'white'; // Text color
		ctx.textAlign = 'center'; // Right align text
		ctx.fillText('SVELTE', x, y);

		// Set text style for 'SUMMIT'
		ctx.fillText('SUMMIT', x, y + lineHeight);

		// Set text style for the dynamic text (e.g., 'FALL')
		ctx.fillStyle = convertToHex(data.secondary_color); // Text color for the dynamic text
		ctx.fillText(dynamicText, x, y + 2 * lineHeight);
	}

	function downloadImage(title, canvas) {
		const dataUrl = canvas.toDataURL('image/png');

		// Create a temporary anchor element
		const a = document.createElement('a');
		a.href = dataUrl;
		a.download = title + 'png' || 'canvas-image.png'; // Default filename if none is provided

		// Trigger the download
		a.click();
	}
</script>

<div class="m-4">
	<div class="flex flex-wrap gap-2 place-items-center">
		<h1 class="text-2xl font-bold">Generate Thumbnails from Sessions</h1>
		<button class="px-4 py-2 bg-secondary text-gray-50 rounded-md" onclick={generateImages}
			>Generate</button
		>
	</div>

	<ul class="flex flex-wrap gap-1">
		{#each data.talks as { title }, idx}
			<button onclick={() => downloadImage(title, canvases[idx])}>
				<canvas class="max-w-md" width="448" height="252" bind:this={canvases[idx]} />
			</button>
		{/each}
	</ul>
</div>

<div class="hidden">
	{@html ring_svg}
</div>
