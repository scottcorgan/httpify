#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var browserify = require('browserify');
var mkdirp = require('mkdirp');

var ENTRY_FILE = path.resolve(__dirname, './index.js');
var DIST_FILE = path.resolve(__dirname, './dist/httpify.js');

console.log('Bundling');

mkdirp.sync('./dist');

return browserify(ENTRY_FILE, {
    standalone: 'httpify'
  })
  .bundle()
  .pipe(fs.createWriteStream(DIST_FILE))
