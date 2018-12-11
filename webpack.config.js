const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
            presets: ['babel-preset-env'],
            plugins: [
              "transform-class-properties",
              "transform-object-rest-spread"
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
  ],
  devServer: {
    contentBase: './dist',
    port: 9000,
  },
}
