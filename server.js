const express = require('express');
const requirejs = require('requirejs');
const path = require('path');

const port = process.env.PORT || 4444;
const basedir = __dirname + '/public';



requirejs.config({
   //Pass the top-level main.js/index.js require
   //function to requirejs so that node modules
   //are loaded relative to the top-level JS file.
   nodeRequire: require
});


const app = express();

app.use(express.static(basedir));
app.get('*', (req, res) => res.sendFile(path.join(basedir, 'index.html')));

app.listen(port);
