import { sveltekit } from '@sveltejs/kit/vite';
import { sentrySvelteKit } from '@sentry/sveltekit';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'gem-state-media',
				project: 'whatgodsaysaboutme',
				authToken: process.env.SENTRY_AUTH_TOKEN
			}
		}),
		sveltekit()
	]
};

export default config;
