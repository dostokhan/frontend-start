const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { PATHS } = require('./constants');


const commonConfig = merge([
  parts.setEntries,
  parts.setOutput,
  parts.resolveProjectDependencies,
  parts.generateDevHTML,
  parts.copyExternalLibs(),
  parts.loadFonts({
    include: PATHS.source,
    exclude: PATHS.node,
    options: {
      name: '[name].[hash:8].[ext]',
    },
  }),
  parts.loadImages({ include: PATHS.source, exclude: PATHS.node }),
  parts.loadJavaScript({ include: PATHS.source, exclude: PATHS.node }),
  parts.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      ),
    },
    {
      name: 'manifest',
      minChunks: Infinity,
    },
  ]),
]);


exports.commonConfig = commonConfig;
