const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { commonConfig } = require('./webpack.common');
const { PATHS, HOST, PORT } = require('./constants');

const configName = 'development';

const config = merge([
  parts.setGlobalVariables(configName, {
    TEST_VAR: JSON.stringify('TEST_VALUE'),
  }),
  parts.setDevServer({
    host: HOST, // process.env.HOST,
    port: PORT, // process.env.PORT,
    hot: true,
  }),
  parts.dashBoardPlugin,
  parts.hmrPlugins,

  parts.loadCSS(),
  // parts.loadImages({
  //   include: PATHS.source,
  //   exclude: PATHS.node,
  // }),
  parts.generateSourceMaps({ type: 'inline-source-map' }),
]);


exports.developmentConfig = merge(commonConfig, config);
