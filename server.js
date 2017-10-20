const express = require('express');
// middleware
const http = require('http');
const path = require('path')
const morgan = require('morgan');
const bodyParser = require('body-parser');

// instantiate express app
const app = express();

// use middleware
app.use(morgan('dev'));
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
    NOTE: dkim - commenting this out for now.
    I don't think we need these routes for this setup.
    All the routing is handled with vue router. see router/index.js
*/
// // Routes
// app.get('/', function(req, res) {
//   res.sendFile(path.resolve(__dirname + '/dist/index.html'));
// });
// // handle every other route with index.html, which will contain
// // a script tag to your application's JavaScript file(s).
// app.get('*', function(req, res) {
//   res.sendFile(path.resolve(__dirname + '/index.html'));
// });

// create/run server
const PORT = process.env.PORT || 3000;
const server = http.createServer(app).listen(PORT);
console.log('listening on port ' + PORT);