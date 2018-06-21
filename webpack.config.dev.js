const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer      = require('autoprefixer');

const exclude = /node_modules/;
const config =  {
  resolve: {
    // add alias for application code directory
    modules: [ 'src/app', 'node_modules'],
    extensions: ['.js', '.jsx'],
    symlinks: false
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-dev-server/client?http://${process.env.npm_package_config_host}:${process.env.npm_package_config_port}`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    colors: true,
    progress: true,
    inline: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: './.eslintrc',
          failOnError: false,
          failOnWarning: false,
          emitWarning: true
        },
        postcss: [
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ]
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.SourceMapDevToolPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html', // Load a custom template 
      inject: 'body' // Inject all scripts into the body 
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:
  {
    loaders : [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'eslint-loader',
        query: { presets: ['react', 'es2015', 'stage-0'], cacheDirectory: true },
        exclude: exclude
      },
      {
        test : /\.jsx?$/,
        loaders :['react-hot-loader/webpack', 'babel-loader'],
        exclude: exclude
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
        exclude: exclude
      },
      {
        test: /\.scss|sass$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif)$/i,
        loaders: ['file-loader'],
        exclude: exclude
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
}
module.exports = config;
