const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const CSSLoader = {
   test: /\.css$/,
   use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
         loader: 'postcss-loader',
         options: {
            postcssOptions: {
               config: path.resolve(__dirname, 'postcss.config.js'),
            },
         },
      },
   ]
}

const JSLoader = {
   test: /\.js$/i,
   exclude: /node_modules/,
   use: {
      loader: 'babel-loader',
      options: {
         presets: ['@babel/preset-env']
      }
   }
};

module.exports = {
   JSLoader: JSLoader,
   CSSLoader: CSSLoader
};