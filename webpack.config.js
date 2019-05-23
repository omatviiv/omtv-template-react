const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/ui/index.js',
  output: {
    filename: 'ui/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      helpers: path.resolve(__dirname, 'src/ui/helpers/'),
      model: path.resolve(__dirname, 'src/api/model/'),
      assets: path.resolve(__dirname, 'src/assets/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread"
            ],
          },
        },
      },
      {
        test: /\.css/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new CleanWebpackPlugin(['dist']),
    new FaviconsWebpackPlugin('./src/assets/images/favicon.png'),
  ],
  devServer: {
    contentBase: './dist',
    port: 9000,
  },
}
