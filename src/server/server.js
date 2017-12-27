const express = require('express');
const webpack = require('webpack');
const path = require('path');
const bodyParser = require('body-parser');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const clientConfig = require('../../webpack/client.dev');
const serverConfig = require('../../webpack/server.dev');

const port = process.env.PORT || 4444;

const publicPath = clientConfig.output.publicPath;
const clientOutputPath = clientConfig.output.path;
const serverOutputhPath = serverConfig.output.path;

const app = new express();

let isBuilt = false;

function done() {
    if (!isBuilt) {
        app.listen(port, () => {
            isBuilt = true;
            console.log(`${new Date().toUTCString()} Noder server is listening to port: ${port}`);
        });
    }
}

app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

console.log('Compiling with Webpack');
const compiler = webpack([clientConfig, serverConfig]);
const clientCompiler = compiler.compilers[0];
const options = {
    publicPath,
    stats: { colors: true },
    serverSideRendering: false
};
app.use(webpackDevMiddleware(compiler, options));
app.use(webpackHotMiddleware(clientCompiler));
app.use(webpackHotServerMiddleware(compiler));

app.use((req, res) => {
    res.send(res.locals.webpackStats.toJson());
});

compiler.plugin('done', done);

function shutdown() {
    console.info('Graceful shutdown..');
    process.exit();
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
