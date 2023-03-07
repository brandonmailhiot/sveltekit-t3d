import adapter from '@sveltejs/adapter-auto'
import { preprocessThrelte } from '@threlte/preprocess'
import preprocess from 'svelte-preprocess'
import seqPreprocessor from 'svelte-sequential-preprocessor'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: seqPreprocessor([
		preprocess({
			postcss: true,
		}), 
		preprocessThrelte()
	]),
	kit: {
		adapter: adapter(),
	},
}

export default config
