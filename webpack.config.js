var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        main: './src/main.ts'
    },
    output: {
        path: "./dist/assets",
        filename: '[name].bundle.js',
        publicPath: "/assets/"
    },
    resolve: {
        root: [
            path.resolve('./src'),
        ],
        extensions: ['', '.js', '.ts', '.css']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([{
            from: './src/index.html',
            to: '..'
        }])
    ]
}
