import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html as toReactNode } from 'satori-html';
import { findLargestUsableFontSize, type Font } from "@altano/satori-fit-text";


import type { SvelteComponent } from 'svelte';

// we use a Vite plugin to turn this import into the result of fs.readFileSync during build
import overpass from './fonts/Overpass-Bold.ttf';
import anton from './fonts/Anton-Regular.ttf'

export async function componentToPng(component: SvelteComponent, props: any, height: number, width: number) {
	const overpassBuffer = Buffer.from(overpass)
	const antonBuffer = Buffer.from(anton)
	
	const largestUsableFontSize = await findLargestUsableFontSize({
		lineHeight: 1,
		font: await {
			name: "Anton",
			data: antonBuffer,
			weight: 600,
		},
		text: props.talk.title,
		maxWidth: 900,
		maxHeight: 300,
	});

	const result = component.render({...props, title_font_size: largestUsableFontSize});
	const markup = toReactNode(`${result.html}<style>${result.css.code}</style>`);

	const svg = await satori(markup, {
		fonts: [
			{
				name: 'Overpass',
				data: overpassBuffer,
				style: 'normal'
			},
			{
				name: 'Anton',
				data: antonBuffer,
				style: 'normal'
			},

		],
		height: +height,
		width: +width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: +width
		}
	});

	const png = resvg.render();

	return new Response(png.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
}