// import satori from 'satori';
// import { Resvg } from '@resvg/resvg-js';
// import { html as toReactNode } from 'satori-html';
// import { findLargestUsableFontSize } from "@altano/satori-fit-text";
// import { render } from 'svelte/server'
// import { read } from '$app/server';

// import type { SvelteComponent } from 'svelte';

// // we use a Vite plugin to turn this import into the result of fs.readFileSync during build
// import overpass from './fonts/Overpass-Bold.ttf?url';
// import anton from './fonts/Anton-Regular.ttf?url'
// const overpassBuffer = read(overpass).arrayBuffer();
// const antonBuffer = read(anton).arrayBuffer();

// export async function componentToPng(component: SvelteComponent, props: any, height: number, width: number) {

// 	const largestUsableFontSize = await findLargestUsableFontSize({
// 		lineHeight: 1,
// 		font: {
// 			name: "Anton",
// 			data: await antonBuffer,
// 			weight: 600,
// 		},
// 		text: props.talk.title,
// 		maxWidth: 900,
// 		maxHeight: 300,
// 	});
	

// 	const result = render(component, { props: {...props, title_font_size: largestUsableFontSize}});
// 	const markup = toReactNode(result.html);

// 	const svg = await satori(markup, {
// 		fonts: [
// 			{
// 				name: 'Overpass',
// 				data: await overpassBuffer,
// 				style: 'normal'
// 			},
// 			{
// 				name: 'Anton',
// 				data: await antonBuffer,
// 				style: 'normal'
// 			},

// 		],
// 		height: +height,
// 		width: +width
// 	});

// 	const resvg = new Resvg(svg, {
// 		fitTo: {
// 			mode: 'width',
// 			value: +width
// 		}
// 	});

// 	const png = resvg.render();

// 	return new Response(png.asPng(), {
// 		headers: {
// 			'content-type': 'image/png'
// 		}
// 	});
// }