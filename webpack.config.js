const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
