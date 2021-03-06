const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const plugins = [
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].css'
  }),
  new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: 'false'
  }),
];

module.exports = env => ({
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? 'source-map' : 'eval-cheap-module-source-map',
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    ...plugins,
    ...(env.production ? [] : [new webpack.HotModuleReplacementPlugin()]),
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: __dirname,
    publicPath: '/dist',
    overlay: true,
    open: false
  }
})
