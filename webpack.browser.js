const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        browser: './client/app/_browser/index.js',
        libs: './client/app/_browser/libs.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'client/build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.js$/,
                loaders: ['angular2-template-loader'],
                include: path.join(__dirname, 'client/app'),
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks: 2,
            chunks: [
                'browser',
                'libs'
            ]
        })
    ],
    resolve: {
        extensions: ['.js', '.html'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'client/app')
        ]

    },
    devtool: 'source-map',
};
