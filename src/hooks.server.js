import * as Sentry from '@sentry/sveltekit';
import { PUBLIC_SENTRY_DSN } from '$env/static/public';

Sentry.init({
    dsn: PUBLIC_SENTRY_DSN,
    traceSampleRate: 1.0,
});

export const handleError = Sentry.handleErrorWithSentry();

export const handle = Sentry.sentryHandle();