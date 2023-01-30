import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /.module./i,
            localIdentName: isDev ? '[name]__[local]' : '[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  }

  return [typescriptLoader, scssLoader]
}
