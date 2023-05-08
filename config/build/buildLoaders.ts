import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildScssLoader } from './loaders/buildScssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const babelLoader = buildBabelLoader(options);

  const imgLoader: webpack.RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = buildScssLoader(isDev);
  const svgLoader = buildSvgLoader();

  return [babelLoader, typescriptLoader, scssLoader, svgLoader, imgLoader];
};
