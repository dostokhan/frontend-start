const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { commonConfig } = require('./webpack.common');
const { PATHS } = require('./constants');

const configName = 'production';

const config = merge([
  parts.clean(PATHS.build),
  parts.setGlobalVariables(configName),
  parts.minifyJavaScript,
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
        // Run cssnano in safe mode to avoid
        // potentially unsafe transformations.
        safe: true,
      },
    },
  }),
  parts.extractCSS({
    include: PATHS.source,
    exclude: PATHS.node,
    // use: ['css-loader', parts.autoprefix()],
  }),
  parts.loadImages({
    include: PATHS.source,
    exclude: PATHS.node,
  }),
]);


exports.productionConfig = merge(commonConfig, config);
