var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    context: path.resolve('src'),
    entry: {
        app: './main.jsx'

    },
    output: {
        path: path.resolve('build'),
        filename: "[name].js"
    },
    plugins: [commonsPlugin],

    module: {
        loaders: [
            {
                test: [/\.jsx/],
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            { test: /\.json$/, loader: 'json' }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
            'node_modules'
        ]
    }
};
