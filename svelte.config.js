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
				'/1',
				'/2',
				'/3',
				'/4',
				'/5',
				'/6',
				'/7',
				'/8',
				'/9',
				'/10',
				'/11',
				'/12',
				'/13',
				'/14',
				'/15',
				'/16',
				'/17',
				'/18',
				'/19',
				'/20',
				'/21',
				'/22',
				'/23',
				'/24',
				'/25',
				'/26',
				'/27',
				'/28',
				'/29',
				'/30',
				'/31',
				'/32',
				'/33',
				'/34',
				'/35',
				'/36',
				'/37',
				'/38',
				'/39',
				'/40',
				'/41',
				'/42',
				'/43',
				'/44',
				'/45',
				'/46',
				'/47',
				'/48',
				'/49',
				'/50'
			]
		}
	},
	preprocess: vitePreprocess()
};

export default config;
