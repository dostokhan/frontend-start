const webpack = require('webpack');
const merge = require('webpack-merge');
const { nextConfig } = require('./config/webpack.next');
const withCSS = require('@zeit/next-css');
// const getRoutes = require('./server/routes');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = withCSS({
  distDir: 'build',
  // useFileSystemPublicRoutes: false,
  // exportPathMap: getRoutes,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
  webpack: (config) => {
    // Perform customizations to webpack config
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    // Important: return the modified config
    // return config
    return merge(nextConfig, config);
  },
  // webpackDevMiddleware: config => {
  //   // Perform customizations to webpack dev middleware config

  //   // Important: return the modified config
  //   return config
  // },
});
