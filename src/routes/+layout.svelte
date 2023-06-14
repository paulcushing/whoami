<script>
	import '../app.css';
	import * as Sentry from '@sentry/svelte';
	import { BrowserTracing } from '@sentry/tracing';
	import { fade } from 'svelte/transition';
	import { PUBLIC_MIXPANEL_TOKEN } from '$env/static/public';

	/* Mixpanel */
	//import mixpanel from 'mixpanel-browser';
	//mixpanel.init(PUBLIC_MIXPANEL_TOKEN, { debug: true });

	// Initialize the Sentry SDK here
	Sentry.init({
		dsn: 'https://11a5a2b6607b461282bce6aced3a6564@o501587.ingest.sentry.io/6748405',
		integrations: [new BrowserTracing()],

		// Set tracesSampleRate to 1.0 to capture 100%
		// of transactions for performance monitoring.
		// We recommend adjusting this value in production
		tracesSampleRate: 1.0
	});

	export let data;
</script>

{#key data.pathname}
	<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 100 }}>
		<slot />
	</div>
{/key}
