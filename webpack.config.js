const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./assets/js/app.js', './assets/sass/app.scss'],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'static')
  },
  module: {
      rules: [
        /*
        your other rules for JavaScript transpiling go in here
        */
        { // regular css files
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            use: 'css-loader?importLoaders=1',
          }),
        },
        { // sass / scss loader for webpack
          test: /\.(sass|scss)$/,
          loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        }
      ]
  },
  plugins: [
      new ExtractTextPlugin({ // define where to save the file
        filename: 'app.css'
      }),
    ],
};
