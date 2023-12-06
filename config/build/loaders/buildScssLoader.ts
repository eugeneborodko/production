import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildScssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
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
});
