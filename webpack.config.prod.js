const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');
const _ = require('lodash');

module.exports = {
    entry: {
        js: './src/app/index.js',
        vendor: _.keys(pkg.dependencies)
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.bundle.js'
        }),
        new webpack.DefinePlugin({
            '__DEV__': false,
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html', // Load a custom template 
            inject: 'body', // Inject all scripts into the body 
            hash: true
        })
    ],
    module: {
        loaders: [
                    {
                        test: /\.jsx?$/,
                        loaders: ['babel-loader?retainLines=true'],
                        include: path.join(__dirname, 'src')
                    },
                    {
                        test: /\.less$/,
                        loader: 'style-loader!css-loader!less-loader',
                        include: path.join(__dirname, 'src')
                      },
                      {
                        test: /\.scss$/,
                        loader: 'style-loader!css-loader!sass-loader',
                        include: path.join(__dirname, 'src')
                      },
                      { test: /\.css$/, loader: 'style-loader!css-loader' },
                      {
                        test: /\.(ico|jpg|jpeg|png|gif)$/i,
                        loaders: ['file-loader'],
                        include: path.join(__dirname, 'src')
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
};
