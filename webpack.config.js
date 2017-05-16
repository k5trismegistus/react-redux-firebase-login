var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'example': './public/src/index.js',
    },
    output: {
        path: './public/dist/',
        filename: 'index.js'
    },
    devtool: 'source-map',
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ["react", "es2015", "stage-1"],
                  plugins: ["transform-decorators-legacy"]
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ["react", "es2015", "stage-1"],
                  plugins: ["transform-decorators-legacy"]
                }
            }
        ]
    },
    resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
