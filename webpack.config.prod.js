const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: ['./src/index.tsx', './src/index.scss'],
  mode: "production",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets'}]),
    new CopyWebpackPlugin([{ from: 'environments/environment.dev.js', to: 'assets/environment.js'}]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [{ 
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader' 
      }
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader", options: { url: false }
        }, {
          loader: "sass-loader"
        }
      ]
    }],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
            output: {
                beautify: false
            }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
}
