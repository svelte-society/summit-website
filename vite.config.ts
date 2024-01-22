import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import fs from 'fs';

export default defineConfig({
	plugins: [sveltekit(),  rawFonts(['.ttf']), ],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

function rawFonts(ext: any) {
	return {
		name: 'vite-plugin-raw-fonts',
		resolveId(id: any) {
			return ext.some((e: any) => id.endsWith(e)) ? id : null;
		},
		transform(code: any, id: any) {
			if (ext.some((e: any) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return { code: `export default ${JSON.stringify(buffer)}`, map: null };
			}
		}
	};
}