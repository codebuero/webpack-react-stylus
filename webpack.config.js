var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_FOLDER = './build/'

module.exports = {
  entry: './src/index.js',
  output: {
    path: BUILD_FOLDER,
    filename: 'bundle.js' 
  },
  resolve: {
    extensions: ["", ".js", ".styl"]
  },
  module: {
    loaders: [{
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")
      }
    ]
  },
   plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};