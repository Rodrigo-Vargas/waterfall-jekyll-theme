const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    styles: './scss/styles.css',
  },
  output: {
    path: path.resolve(__dirname, '../assets'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {test: /\.css$/,
       use: [MiniCssExtractPlugin.loader,'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].css'}),
    new FixStyleOnlyEntriesPlugin(),
    new OptimizeCSSAssetsPlugin({})
  ]
}