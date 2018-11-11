const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname,'src','index.tsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [ 
      { test: /\.(ts|tsx)$/, loaders: [ 'ts-loader' ], exclude: /node_modules/, include: __dirname},
      { test: /\.(json)$/, loaders: [ 'json-loader' ], include: __dirname},
      { test: /\.js$/, loaders: [ "babel"], exclude: /node_modules/, include: __dirname},
      { test: /\.(less|less)$/,  loader: `style-loader!css-loader!less-loader?${JSON.stringify({ modifyVars : require("./package.json").theme})}` }
	]
  },
  resolve : {
     extensions: ['.js', '.json', '.jsx', '.tsx', ".ts"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'), // Load a custom template
      inject: 'body' // Inject all scripts into the body
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([{
      from : "./assets/**/*",
      to : "./"
    }], {}),
    new CopyWebpackPlugin([{
      from : path.join(__dirname, "./src/pages/simplus-ui/components/components-explained/**/*"),
      to : "./"
    }], {}),
    new CopyWebpackPlugin([{
      from : path.join(__dirname, "./src/pages/simplus-ui/business/business-explained/**/*"),
      to : "./"
    }], {})
  ]
}