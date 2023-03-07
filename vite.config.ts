import { sveltekit } from '@sveltejs/kit/vite';
import * as path from 'path';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

const supportedExtensions = ['.png', '.jpg', '.jpeg'];

const config: UserConfig = {
	plugins: [
		imagetools({
			force: true,
			defaultDirectives: (url: URL): URLSearchParams => {
				const extension = path.extname(url.pathname);
				if (supportedExtensions.includes(extension)) {
					return new URLSearchParams({
						format: 'avif;webp;' + extension.slice(1),
						picture: 'true',
					});
				}
				return new URLSearchParams();
			},
		}),
		sveltekit(),
	],
	server: {
		fs: {
			strict: false,
		},
	},
	ssr: {
		noExternal: ['three', 'troika-three-text'],
	},
};

export default config;
