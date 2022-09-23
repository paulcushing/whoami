<script>
	import '../app.css';
	import * as Sentry from '@sentry/svelte';
	import { BrowserTracing } from '@sentry/tracing';

	// Initialize the Sentry SDK here
	Sentry.init({
		dsn: 'https://11a5a2b6607b461282bce6aced3a6564@o501587.ingest.sentry.io/6748405',
		integrations: [new BrowserTracing()],

		// Set tracesSampleRate to 1.0 to capture 100%
		// of transactions for performance monitoring.
		// We recommend adjusting this value in production
		tracesSampleRate: 1.0
	});
</script>

<slot />
