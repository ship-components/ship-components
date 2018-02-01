/**
 * Webpack
 *
 * ---------------------------------------------------------------
 *
 * Module loader, JSX transform, Minification, Sourcemaps
 *
 * For usage docs see:
 *    https://github.com/webpack/grunt-webpack
 */

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(grunt) {

  /** **************************************************************************
   * Build
   */
  var buildOptions = Object.assign({}, require('./webpack.config'), {
    // Clear default plugins so we can override through grunt
    plugins: []
  });

  grunt.config.set('webpack', {

    options: buildOptions,

    dev: {
      plugins: [
        new ExtractTextPlugin('[name].css', {
          allChunks: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true)
      ]
    },

    dist : {
      output: {
        filename: '[name].min.js'
      },

      plugins: [
        new ExtractTextPlugin('[name].min.css', {
          allChunks: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
      ]
    }
  });

  /** **************************************************************************
   * Development Server
   */
  var serverOptions = Object.assign({}, require('./webpack.config'), {
    plugins: [],
    entry : {
      bundle: path.resolve(__dirname, '../../examples/index.jsx')
    },
    output: {
      filename: 'bundle.js'
    },
    devtool: 'eval',
    eslint: {
      failOnWarning: false
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup'
    }
  });

  // Remove Extract Plugin. Gotta clone to prevent changing above config
  serverOptions.module = Object.assign({}, serverOptions.module);
  serverOptions.module.loaders = serverOptions.module.loaders.slice(0);
  serverOptions.module.loaders.splice(serverOptions.module.loaders.length - 1);
  serverOptions.module.loaders.push({
    test: /\.css$/,
    loaders: [
      'style-loader',
      'css-loader?modules&importLoaders=1&localIdentName=[name]--[local]-[hash:base64:5]!postcss-loader'
    ]
  });

  // Include any npm modules we need to use babel on here
  serverOptions.module.loaders.push({
    test: /\.(jsx?|es6)$/,
    include: [
      path.join(__dirname, '../../node_modules/react-highlight-click')
    ],
    loader: 'babel'
  });

  grunt.config.set('webpack-dev-server', {
    options: {
      webpack: serverOptions,
      host: 'localhost',
      contentBase: 'examples/',
      publicPath: '/assets/',
      filename: 'bundle.js',
      keepalive: true,
      inline: true,
      hot: true,
      quiet: false,
      noInfo: false
    },

    dev: {}
  });

  grunt.loadNpmTasks('grunt-webpack');
};
