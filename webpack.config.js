const path = require('path');
const fs = require('fs');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname,'src','index.tsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      chunks: false,
      children: false
    }
  },
  devtool: 'source-map',
  module: {
    rules : [
      { test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: /node_modules/, include: path.join(__dirname, "..")},
      { test: /\.(json)$/, loader: 'json-loader', include: path.join(__dirname, "..")},
      { test: /\.js$/, loaders: "babel", exclude: /node_modules/, include: path.join(__dirname, "..")},
      { test: /\.(less|less|css)$/,  loader: `style-loader!css-loader!less-loader?${JSON.stringify({ modifyVars : require("./package.json").theme})}` },
      { test: /\.(png|jpg)$/i, exclude: /node_modules/, loader: 'file' }
    ]
    // loaders: [ 
    //   { test: /\.(ts|tsx)$/, loaders: [ 'ts-loader' ], exclude: /node_modules/, include: __dirname},
    //   { test: /\.(json)$/, loaders: [ 'json-loader' ], include: __dirname},
    //   { test: /\.js$/, loaders: [ "babel"], exclude: /node_modules/, include: __dirname},
    //   { test: /\.(less|less)$/,  loader: `style-loader!css-loader!less-loader?${JSON.stringify({ modifyVars : {}})}` },
    //   { test: /\.(png|jpg)$/i, exclude: /node_modules/, loader: 'file' } ]
  },
  resolve : {
     extensions: ['.js', '.json', '.jsx', '.tsx', ".ts", "md"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'), // Load a custom template
      inject: 'body' // Inject all scripts into the body
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
}