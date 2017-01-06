const express = require('express');
const requirejs = require('requirejs');

requirejs.config({
   //Pass the top-level main.js/index.js require
   //function to requirejs so that node modules
   //are loaded relative to the top-level JS file.
   nodeRequire: require
});

const port = process.env.PORT || 4444;
const basedir = __dirname + '/public';

const app = express();

// HTML5 pushState: serve static files or index.html for everything else
app.use(express.static(basedir));
app.get('*', (req, res) => res.sendFile('index.html', { root: basedir }));

// Start listening
app.listen(port);
