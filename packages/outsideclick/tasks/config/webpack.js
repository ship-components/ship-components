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

module.exports = function(grunt) {
  var PackageBanner = require('package-banner');
  var webpack = require('webpack');
  var path = require('path');

  var pkg = grunt.file.readJSON('package.json');
  var banner = new PackageBanner({
    pkg: pkg,
    wrap: false
  }).build();

  grunt.config.set('webpack', {

    options: {
      // Where to start
      entry: {
        OutsideClick: './src/OutsideClick.js'
      },

      // Where to output
      output: {
        path: './es5',
        filename: '[name].js',
        libraryTarget: 'commonjs2'
      },

      externals: {
        'react': true,
        'react-dom': true
      },

      stats: {
        colors: true,
        modules: false,
        reasons: true
      },

      module: {
        preLoaders: [{
          test: /\.jsx?|\.es6$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'eslint-loader'
        }],
        loaders: [
          // Setup jsx loader
          {
            test: /\.jsx?|\.es6$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
          }
        ]
      },

      jshint: {
        failOnHint: false,
        esnext: true
      },

      resolve: {
        extensions: ['', '.js', '.jsx', '.es6'],
        fallback: path.resolve(__dirname, '../../node_modules')
      },

      resolveLoader: {
        fallback: path.resolve(__dirname, '../../node_modules')
      },

      plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        // new webpack.EnvironmentPlugin(['NODE_ENV']),
        new webpack.BannerPlugin(banner)
      ]
    },

    dev: {},

    dist : {

      output: {
        filename: '[name].min.js'
      },

      plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        // new webpack.EnvironmentPlugin(['NODE_ENV']),
        new webpack.optimize.UglifyJsPlugin()
        // new webpack.BannerPlugin(banner)
      ]
    },

    watch: {
      watch: true,
      keepalive: true,
      failOnError: false,
      progress: false
    }
  });
};
