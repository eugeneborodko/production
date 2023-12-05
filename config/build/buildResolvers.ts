import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  mainFiles: ['index'],
  modules: [options.paths.src, 'node_modules'],
  alias: {
    '@': options.paths.src,
  },
});
