import { withSentryConfig } from '@sentry/nextjs';  // Importing using ES Module syntax

const moduleExports = {
  // your config options here (if any)
};

export default withSentryConfig(moduleExports, {
  silent: true,  // directly inlined
});  // Using ES Module export
