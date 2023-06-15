const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    nowPlaying: './src/nowPlaying.js',
    topRatedMovies: './src/topRatedMovies.js',
    popularMovies: './src/popularMovies.js',
    topTvRated: './src/topTvRated.js',
    tvPopular: './src/tvPopular.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: ['file-loader?name=assets/images/[name].[ext]'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['main'],
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/nowPlaying.html',
      inject: true,
      chunks: ['nowPlaying'],
      filename: 'nowPlaying.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/topRatedMovies.html',
      inject: true,
      chunks: ['topRatedMovies'],
      filename: 'topRatedMovies.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/popularMovies.html',
      inject: true,
      chunks: ['popularMovies'],
      filename: 'popularMovies.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/topTvRated.html',
      inject: true,
      chunks: ['topTvRated'],
      filename: 'topTvRated.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/tvPopular.html',
      inject: true,
      chunks: ['tvPopular'],
      filename: 'tvPopular.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
