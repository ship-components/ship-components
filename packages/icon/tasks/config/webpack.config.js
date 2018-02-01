var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Where to start
  entry: {
    index: path.resolve(__dirname, '../../src/icon.css')
  },

  // Where to output
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },

  externals: {
    'classnames': true,
    'react': 'React',
    'react-dom': true,
    'react-addons-css-transition-group': true
  },

  module: {
    loaders: [
      // ES6/JSX for App
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
       test: /\.(png|svg|jpeg|jpg|ttf|eot|woff)/,
       loader: 'file?name=[name].[ext]'
      },
      // CSS Modules
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]--[local]!postcss-loader'
        )
      }
    ]
  },

  // CSS Modules
  postcss: [
    require('autoprefixer')
  ],

  stats: {
    children: false,
    colors: true,
    modules: false,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    fallback: path.resolve(__dirname, '../../node_modules')
  },

  resolveLoader: {
    fallback: path.resolve(__dirname, '../../node_modules')
  },

  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true)
  ],

  devtool: 'source-map'
};
