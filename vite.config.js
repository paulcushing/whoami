import { sveltekit } from '@sveltejs/kit/vite';
import { sentrySvelteKit } from '@sentry/sveltekit';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sentrySvelteKit(), sveltekit()]
};

export default config;
