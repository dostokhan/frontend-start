const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DashboardPlugin = require('webpack-dashboard/plugin');
const {
  PATHS,
  HOST,
  PORT,
  API_URL,
  API_URL_BACK,
  APP_URL,
} = require('./constants');

exports.setGlobalVariables = (target, override = {}) => ({
  plugins: [
    new webpack.DefinePlugin(Object.assign({
      'process.env': {
        NODE_ENV: JSON.stringify(target),
      },
      PRODUCTION: JSON.stringify(target === 'production'),
      DEBUG: JSON.stringify(target !== 'production'),
      API_URL: JSON.stringify(API_URL[target]),
      API_URL_BACK: JSON.stringify(API_URL_BACK[target]),
      APP_URL: JSON.stringify(APP_URL[target]),
    }, override)),
  ],
});

exports.setEntries = {
  entry: {
    app: `${PATHS.source}/index.js`,
  },
};


exports.setOutput = {
  output: {
    publicPath: '/',
    path: PATHS.build,
    filename: '[name]-[hash].js',
  },
};

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});

exports.resolveProjectDependencies = {
  resolve: {
    modules: [
      PATHS.app,
      PATHS.node,
    ],
    alias: {
      Assets: PATHS.Assets,
      Styles: PATHS.Styles,
    },
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
};

exports.copyExternalLibs = () => ({
  plugins: [
    new CopyWebpackPlugin([
      { from: PATHS.Libs, to: `${PATHS.build}/libs/` },
    ]),
  ],
});

// exports.setExtraLibs = {
//   plugins: [

//     new AddAssetHtmlPlugin([
//       { filepath: PATHS.Libs + '/jquery-2.1.1.min.js' , type: 'js'},
//     ]),
//   ],
//   // resolve:
//   // {
//   //   alias: {
//   //     jQuery: PATHS.Libs + '/jquery-2.1.1.min.js',
//   //   },
//   //   extensions: ['.js'],
//   // },
//   // externals: {
//   //   jQuery: 'jQuery',
//   // },
//   // plugins: [
//   //   new webpack.ProvidePlugin({
//   //     jQuery: 'jQuery',
//   //   }),
//   // ],
// };

exports.generateDevHTML = {
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.source}/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};

exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [{
      // Capture eot, ttf, woff, and woff2
      test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      include,
      exclude,

      use: {
        loader: 'file-loader',
        options,
      },
    }],
  },
});
exports.loadImages = ({ include, exclude } = {}) => ({
  module: {
    rules: [{
      test: /\.(png|jpg|svg|ico)$/,
      include,
      exclude,

      use: {
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          limit: 8192,
          name: '[name]-[hash].[ext]',

          publicPath: '/_next/static/images/',
          outputPath: 'static/images/',
        },
      },
    }],
  },
});

exports.loadJavaScript = ({ include, exclude }) => ({
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      // test: /^(?!.*\.min\.js$).*\.(js|jsx)$/,
      // test: /^(?!.*\.min\.js$).*\.(js|jsx)$/,
      include,
      exclude,

      loader: 'babel-loader',
      options: {
        // Enable caching for improved performance during
        // development.
        // It uses default OS directory by default. If you need
        // something more custom, pass a path to it.
        // I.e., { cacheDirectory: '<path>' }
        cacheDirectory: true,
      },
    }],
  },
});
exports.loadSass = ({ include, exclude } = {}) =>
  ({
    module: {
      rules: [
        {
          test: /\.scss$/,
          include,
          exclude,
          use: [
            'style-loader',
            'css-loader',
            // 'postcss-loader'
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
  });

// exports.loadCSSNext = ({ include, exclude } = {}) => ({
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         include,
//         exclude,
//         loader: 'css-loader',
//       },
//     ],
//   },
// });

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        loader: 'style-loader!css-loader',
        // use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

exports.extractBundles = bundles => ({
  plugins: bundles.map(bundle =>
    new webpack.optimize.CommonsChunkPlugin(bundle),
  ),
});


/* ***************************
 * DEVELOPMENT PARTS
 * **************************/

exports.dashBoardPlugin = {
  plugins: [
    new DashboardPlugin(),
  ],
};

exports.hmrPlugins = {
  entry: {
    // HMR ENTRY POINTS
    hotClient: `webpack-dev-server/client?http://${HOST}:${PORT}`,
    hotServer: 'webpack/hot/only-dev-server',
  },
  // module: {
  //   loaders: [{
  //     test: /\.(js|jsx)$/,
  //     loaders: ['react-hot-loader/webpack'],
  //     include: PATHS.source,
  //     exclude: PATHS.node,
  //   }],
  // },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

exports.setDevServer = ({ host, port, hot } = {}) =>
  ({
    devServer: {
      contentBase: PATHS.source,
      publicPath: '/', // MUST MATCH output publicPath
      // https: true,
      disableHostCheck: true,
      hot,
      inline: true,
      // clientLogLevel: 'none',
      // quiet: true, // enable when using dashboard
      stats: {
        colors: true,
      },
      historyApiFallback: true,
      host,
      port,
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  });


/* ***************************
 * PRODUCTION PARTS
 * **************************/

exports.clean = path =>
  ({
    plugins: [
      new CleanWebpackPlugin([path],
        {
          verbose: true,
          allowExternal: true,
        }),
    ],
  });

exports.minifyJavaScript = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      parallel: true,
      compress: {
        warnings: false,
        drop_console: true,
      },
    }),
  ],
};

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false,
    }),
  ],
});

exports.extractSass = ({ include, exclude }) => {
  // Output extracted CSS to a file
  const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash:8].css',
  });

  return ({
    module: {
      rules: [
        {
          test: /\.scss$/,
          include,
          exclude,
          use: extractSass.extract({
            // use: [
            //   'style-loader',
            //   'css-loader',
            //   // 'postcss-loader'
            //   {
            //     loader: 'sass-loader',
            //   },
            // ],
            use: [
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
            // use style-loader in development
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [extractSass],
  });
};

exports.extractCSS = ({ include, exclude }) =>
  ({
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  });

// exports.autoprefix = () => ({
//   loader: 'postcss-loader',
//   options: {
//     plugins: () => ([
//       require('autoprefixer')(),
//     ]),
//   },
// });
