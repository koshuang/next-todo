/* eslint-disable @typescript-eslint/no-var-requires */
const dotEnvResult = require('dotenv').config();
const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
/* eslint-enable @typescript-eslint/no-var-requires */

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {};
}
console.log('process.env.API_URL', process.env.API_URL);
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60,
    pagesBufferLength: 5,
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  }
};

module.exports = withPlugins(
  [
    [withTypescript],
    [withCSS],
    [withSass],
    [withLess],
    [withBundleAnalyzer]
  ],
  nextConfig,
);
