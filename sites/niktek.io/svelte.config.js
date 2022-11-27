import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	alias: {
		'@skeletonlabs/skeleton': '../../ext/skeleton/src/lib/',
		'$foo': 'src/foo/'
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
