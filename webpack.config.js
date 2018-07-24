const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: ['./assets/js/app.js', './assets/sass/app.scss'],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'static')
  },
  module: {
      rules: [
          {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                  loaders: {
                      scss: 'vue-style-loader!css-loader!sass-loader',
                      sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                  },
                  extractCSS: true
              }
          },
        { // regular css files
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            use: 'css-loader?importLoaders=1',
          }),
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
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
      new VueLoaderPlugin()
    ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      }
  }
};
