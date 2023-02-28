import webpack from 'webpack';
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

  const modules = config.resolve?.modules;
  const extensions = config.resolve?.extensions;

  modules?.push(paths.src);
  extensions?.push('.ts', '.tsx');

  let rules = config?.module?.rules;
  rules = rules?.map((rule: any) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  rules?.push(buildSvgLoader());

  if (config?.module?.rules) {
    config.module.rules.push(buildScssLoader(true));
  }

  return config;
};
