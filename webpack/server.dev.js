const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

const res = p => path.resolve(__dirname, p);

const nodeModules = res('../node_modules');
const entry = res('../src/server/render.js');
const output = res('../public/server');

const externals = fs
    .readdirSync(nodeModules)
    .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
    .reduce((externals, mod) => {
        externals[mod] = `commonjs ${mod}`;
        return externals;
    }, {});

externals['react-dom/server'] = 'commonjs react-dom/server';

module.exports = {
    name: 'server',
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    devtool: 'eval',
    entry: [entry],
    externals,
    output: {
        path: output,
        filename: 'render.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /(?!.*\.test)\.js?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    failOnWarning: false,
                    failOnError: true
                },
            },
            {
                test: /(?!.*\.test)\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'ignore-loader'
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, '../', 'src', 'app')
        ]
    },
    plugins: [
        new WriteFilePlugin(),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development'
        }),
        new webpack.DefinePlugin({
            'process.env.BROWSWER': false
        })
    ]
};
