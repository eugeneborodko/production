import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] => [
  new HTMLWebpackPlugin({
    template: paths.html,
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:5].css',
    chunkFilename: 'css/[name].[contenthash:5].css',
  }),
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
];
