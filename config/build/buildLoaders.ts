import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildScssLoader } from './loaders/buildScssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const tsBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const imgLoader: webpack.RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const scssLoader = buildScssLoader(isDev);
  const svgLoader = buildSvgLoader();

  return [tsBabelLoader, tsxBabelLoader, scssLoader, svgLoader, imgLoader];
};
