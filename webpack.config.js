const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: ''}
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  },
  devtool: 'source-map',
}
