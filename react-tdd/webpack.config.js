// our webpack.config.js file located in project root

var webpack = require('webpack');
var path = require('path');                // a useful node path helper library

var config = {
  entry: ['./src/main.js'],                // the entry point for our app
  output: {
    path: path.resolve(__dirname, 'dist'), // store the bundled output in dist/bundle.js
    filename: 'bundle.js'                  // specifying file name for our compiled assets
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}

module.exports = config;