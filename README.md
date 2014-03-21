# httpify

Http in Node and Browserify, simply.
 
## Install
 
```
npm install httpify --save
```
 
## Usage

When using with Browserify, this module returns a shimmed version of the [xhr](https://github.com/Raynos/xhr) module. When using with Node, it returns the raw [request](https://www.npmjs.org/package/request) module.

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

See the documentation for [xhr](https://github.com/Raynos/xhr) and [request](https://www.npmjs.org/package/request) for a complete list of options.

## TODO

* add support for Angular
* add more robust Browserify bundle/transform support
