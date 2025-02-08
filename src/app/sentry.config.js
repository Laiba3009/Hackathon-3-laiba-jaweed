const { withSentryConfig } = require('@sentry/nextjs');
const moduleExports = {

};

const sentryConfig =  {
    silent: true,
};
module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
