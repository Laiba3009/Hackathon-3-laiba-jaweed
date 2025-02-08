import { withSentryConfig } from '@sentry/nextjs';  // Importing using ES Module syntax

const moduleExports = {
  // your config options here (if any)
};

const sentryConfig = {
  silent: true,
};

export default withSentryConfig(moduleExports, sentryConfig);  // Using ES Module export
