import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
const CopyPlugin = require('copy-webpack-plugin');


type Mode = 'production' | 'development';

interface EnvVariables{
  mode: Mode
}
interface Configuration extends WebpackConfiguration {
  devServer?: DevServerConfiguration;
}


export default (env: EnvVariables): Configuration => {
  const config: Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'src', 'img'), to: 'img' },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]',
          },
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'inline-source-map',
    devServer: {
      port: 8080,
      open: true,
    },
    stats: {
      errorDetails: true,
    },
  };
  return config;
};
