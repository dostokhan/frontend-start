const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { PATHS } = require('./constants');

const configName = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const nextConfig = merge([
  parts.resolveProjectDependencies,
  parts.setGlobalVariables(configName),

  // parts.loadCSS(({
  //   include: PATHS.app,
  //   exclude: PATHS.node,
  // })),
  parts.loadImages({
    include: PATHS.app,
    exclude: PATHS.node,
  }),
]);

exports.nextConfig = nextConfig;
