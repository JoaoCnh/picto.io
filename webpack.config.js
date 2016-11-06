var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: { path: __dirname, filename: '/public/app/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-decorators-legacy' ],
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
