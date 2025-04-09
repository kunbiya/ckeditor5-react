const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');

module.exports = function () {
  return {
    mode: 'production',

    entry: './src/modules.ts',

    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        '@': paths.appSrc,
        react: path.resolve('./node_modules/react'),
      },
    },
    output: {
      filename: 'index.js',
      libraryTarget: 'umd',
      path: paths.appBuild,
    },

    module: {
      rules: [
        // {
        //   test: /\.(js|jsx|ts|tsx)?$/,
        //   loader: 'esbuild-loader',
        //   options: {
        //     loader: 'tsx',
        //     target: 'es2015',
        //   },
        // },
        {
          test: /\.(js|ts)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              // plugins: [
              //   ['@babel/plugin-proposal-class-properties', { loose: true }],
              //   '@babel/plugin-proposal-object-rest-spread',
              // ],
            },
          },
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpe?g|gif|eot|woff|woff2|ttf|svg)$/,
          use: {
            loader: 'url-loader'
          }
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
    ],
    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
      },
    },
  }
};
