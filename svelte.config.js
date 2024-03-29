import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			// use relative URLs similar to an anchor tag <a href="/test/1"></a>
			// do not include group layout folders in the path such as /(group)/test/1
			entries: [
				'/1.html',
				'/2.html',
				'/3.html',
				'/4.html',
				'/5.html',
				'/6.html',
				'/7.html',
				'/8.html',
				'/9.html',
				'/10.html',
				'/11.html',
				'/12.html',
				'/13.html',
				'/14.html',
				'/15.html',
				'/16.html',
				'/17.html',
				'/18.html',
				'/19.html',
				'/20.html',
				'/21.html',
				'/22.html',
				'/23.html',
				'/24.html',
				'/25.html',
				'/26.html',
				'/27.html',
				'/28.html',
				'/29.html',
				'/30.html',
				'/31.html',
				'/32.html',
				'/33.html',
				'/34.html',
				'/35.html',
				'/36.html',
				'/37.html',
				'/38.html',
				'/39.html',
				'/40.html',
				'/41.html',
				'/42.html',
				'/43.html',
				'/44.html',
				'/45.html',
				'/46.html',
				'/47.html',
				'/48.html',
				'/49.html',
				'/50.html'
			]
		}
	},
	preprocess: vitePreprocess()
};

export default config;
