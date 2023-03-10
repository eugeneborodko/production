// @ts-nocheck
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules = [paths.src, 'node_modules'];
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push(buildSvgLoader());
  config.module.rules.push(buildScssLoader(true));

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true,
  }));

  return config;
};
