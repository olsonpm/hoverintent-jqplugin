'use strict';

var gulp = require('gulp')
  , express = require('express')
  , path = require('path');

var app = express();

gulp.task('run-cjs-example', function() {
    app.get('/', function(req, res) {
      res.sendFile(path.resolve('./examples/cjs/index.html'));
    })
    .get('/index.bundled.js', function(req, res) {
      res.sendFile(path.resolve('./examples/cjs/index.bundled.js'));
    })
    .listen('8080', function() {
      console.log('cjs example now listening on port 8080');
    })
});
