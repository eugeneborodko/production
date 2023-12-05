// @ts-nocheck
import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
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
  config.resolve!.alias = { '@': paths.src };

  const rules = config.module!.rules as RuleSetRule[];
  config.module.rules = rules.map((rule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push(buildSvgLoader());
  config.module.rules.push(buildScssLoader(true));

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('https://testapi.com'),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
