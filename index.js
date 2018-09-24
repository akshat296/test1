const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// const socketIo = require('socket.io');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express();
const server = http.createServer(app);
var port = 3001;
app.use(express.static(path.join(__dirname, '/public')));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({ extended: false }));

console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
server.listen(port);
