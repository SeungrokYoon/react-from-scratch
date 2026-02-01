// Generated using webpack-cli https://github.com/webpack/webpack-cli
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const config = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'code.bundle.js',
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    host: '0.0.0.0', // Bind to all interfaces
    port: 3000,
  },
  plugins: [
    // 환경 변수를 브라우저에서 사용 가능하도록 정의
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
    }),
    // Cloudflare Pages SPA 지원을 위한 404.html 생성
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: '404.html',
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {
            ignore: ['**/index.html'], // HtmlWebpackPlugin이 생성하므로 제외
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: require.resolve('ts-loader'),
      },
      {
        test: /\.css$/i,
        use: [
          stylesHandler,
          require.resolve('css-loader'),
          require.resolve('postcss-loader'),
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@Page': path.resolve(__dirname, './src/pages'),
      '@Component': path.resolve(__dirname, './src/components'),
      '@Hook': path.resolve(__dirname, './src/hooks'),
    },
  },
};

export default () => {
  if (isProduction) {
    config.mode = 'production';
    config.plugins.push(new MiniCssExtractPlugin() as any);
  } else {
    config.mode = 'development';
  }
  return config;
};
