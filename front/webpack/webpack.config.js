const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const loaders = require('./loaders');
const webpack = require('webpack');

module.exports = {
   mode: 'development',
   entry: {
      styles: './scss/styles.css',
      scripts: './js/site.js'
   },
   output: {
      path: path.resolve(__dirname, '../../assets'),
      filename: '[name].bundle.js',
   },
   module: {
      rules: [
         loaders.CSSLoader,
         loaders.JSLoader
      ]
   },
   plugins: [
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({ filename: '[name].css' }),
      new FixStyleOnlyEntriesPlugin(),
      // new OptimizeCSSAssetsPlugin({}),
   ]
}