const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const settings = {
  distPath: path.join(__dirname, 'dist'),
  srcPath: path.join(__dirname, 'src'),
};

function srcPathExtend(subpath) {
  return path.join(settings.srcPath, subpath);
}

module.exports = (env, options) => {
  const isDevMode = options.mode === 'development';

  return {
    devtool: isDevMode ? 'source-map' : false,
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    entry: ['@babel/polyfill', settings.srcPath],
    output: {
      path: settings.distPath,
      publicPath: '/',
      filename: 'bundle.js',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },


        {
          test: /\.(scss|css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevMode,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')(),
                ],
                sourceMap: isDevMode,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevMode,
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[ext]',
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin([settings.distPath], {
        verbose: true,
      }),
      new HtmlWebpackPlugin({
        template: srcPathExtend('index.html'),
      }),
    ],
  };
};
