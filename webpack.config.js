const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacement = require('lodash-webpack-plugin');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'main.[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /node_modules/,
          priority: 20
        }
      }
    },
    concatenateModules: true
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['lodash', '@babel/plugin-syntax-dynamic-import'],
          presets: [
            ['@babel/preset-env', { targets: { chrome: 68 } }],
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 2, sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name]-[hash].[ext]'
          }
        }
      },
      {
        test: /\.(ttf|eof|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  }
};
