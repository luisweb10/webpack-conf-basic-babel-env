const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode:"development",
  entry:  './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
         rules: [
             {
                 test: /\.js?$/,
                 exclude:[
                 	path.resolve(__dirname,'./node_modules/')
                 ],
                 loader: 'babel-loader',
                 options: {
                     presets: ['env']
                 }
             }
         ]
     },
     devServer: {
	    contentBase: path.join(__dirname, 'dist'),
	    compress: false,
	    port: 8080
	},
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$':'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};