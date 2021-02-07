const path = require('path')
const { webpack } = require('webpack')

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'] ,

  mode: 'development',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: {
            plugins: ['react-hot-loader/babel'],
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            cacheDirectory: true,
          }
        }
      }
    ]
  },

  devServer: {
    hot: true,
    open: true,
    inline: true,
    host: '0.0.0.0',
    port: 4000,
    contentBase: path.join(__dirname, 'public')
  }
}