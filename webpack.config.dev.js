const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const exclude = /node_modules/;
module.exports = {
  entry: [
    `webpack-dev-server/client?http://${process.env.npm_package_config_host}:${process.env.npm_package_config_port}`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: './.eslintrc'
        }
      }
    }),
    new webpack.SourceMapDevToolPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html', // Load a custom template 
      inject: 'body' // Inject all scripts into the body 
    })
  ],
  module:
  {
    loaders : [
      		{
        		test : /\.jsx?/,
        		loaders :['react-hot-loader/webpack', 'babel-loader'],
            exclude: /node_modules/
          },
          {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader',
            exclude: /node_modules/
          },
          {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
          },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          {
            test: /\.(ico|jpg|jpeg|png|gif)$/i,
            loaders: ['file-loader'],
            exclude: /node_modules/
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
