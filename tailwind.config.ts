import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import elevation from 'tailwindcss-elevation';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			display: ['Anton'],
			body: ['Overpass'],
		},
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
			},
		},
		typography: {
			DEFAULT: {
				css: {
					prose: {
						'max-width': '100ch',
					},
					'max-w-prose': {
						'max-width': '100ch',
					},
				},
			},
		},
	},
	plugins: [typography, forms, containerQueries, aspectRatio, elevation],
} as Config;
