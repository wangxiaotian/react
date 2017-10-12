const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      app: [
          './src/index.jsx'
      ]
    },
    output: {
      filename: 'index.js',
      path: '/dist'
    },
    module: {
      rules: [{
          test: /\.jsx$/,
          use: ['jsx-loader', 'babel-loader'],
          exclude: path.resolve(__dirname, '../node_modules')
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: '../build/ind.html',
        hash: true
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
}