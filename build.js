#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var browserify = require('browserify');

var ENTRY_FILE = path.resolve(__dirname, './index.js');
var DIST_FILE = path.resolve(__dirname, './dist/httpify.js');

console.log('Bundling');

return browserify(ENTRY_FILE)
  .bundle({
    standalone: 'httpify'
  })
  .pipe(fs.createWriteStream(DIST_FILE))
