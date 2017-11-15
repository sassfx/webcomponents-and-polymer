var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080', // live reload
      './app/app.html'
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: [path.resolve(__dirname, '..', 'index.html')],
        use: ['polymer-webpack-loader']
      }
    ]
  },
};
