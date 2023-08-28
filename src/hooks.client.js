import * as Sentry from '@sentry/sveltekit';
import { PUBLIC_SENTRY_DSN, PUBLIC_SENTRY_ENVIRONMENT } from '$env/static/public';

Sentry.init({
    dsn: PUBLIC_SENTRY_DSN,
    traceSampleRate: 1.0,
    integrations: [
        new Sentry.Replay()],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    environment: PUBLIC_SENTRY_ENVIRONMENT,
});

export const handleError = Sentry.handleErrorWithSentry();