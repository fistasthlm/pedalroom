const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'client',
    target: 'web',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?path=/__webpack__hmr&timeout=2000&reload=false&quite=false&noInfo=false',
        'babel-polyfill',
        'react-hot-loader/patch',
        path.resolve(__dirname, '../', 'src', 'app', 'client')
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.join(__dirname, '../', 'public', 'client'),
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /(?!.*\.test)\.js?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    failOnWarning: false,
                    failOnError: true
                },
            },
            {
                test: /(?!.*\.test)\.js$/,
                exclude: [/node_modules/, /__tests__/],
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        modules: [
            path.join(__dirname, '../', 'src', 'app'),
            'node_modules'
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js',
            minChunks: Infinity
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false
        }),
        new webpack.DefinePlugin({
            'process.env.BROWSER': true
        }),
    ]
};
