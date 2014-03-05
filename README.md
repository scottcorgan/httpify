# httpify
 
An Browserify, Angular bridge for the Request NPM module
 
## Install
 
```
npm install httpify --save
```
 
## Usage

When using with Browserify, this module returns a shimmed version of the [reqwest](https://www.npmjs.org/package/reqwest) module. When using with Node, it returns the raw [request](https://www.npmjs.org/package/request) module.

Uses callbacks and promise.

```js
var httpify = require('httpify');

var req = httpify({
  url: 'http://somewhere.com',
  method: 'GET',
  type: 'json'
}, function (err, response, body) {
  // Do stuff
});

req.then(function (response) {
  // Do stuff
});
```

See the documentation for [reqwest](https://www.npmjs.org/package/reqwest) and [request](https://www.npmjs.org/package/request) for a complete list of options.