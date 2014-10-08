var httpify = require('../../lib/browser');
var sinon = require('sinon');
var test = require('tape');

var noop = function() {};
global.window.XMLHttpRequest = function() {
  this.open = noop;
  this.send = noop;
};

test('makes a get request', function (t) {
  var url = '/get';
  var req = httpify({url: url}, noop);
  
  t.equal(req.url, url, 'correct url');
  t.equal(req.method, 'GET', 'correct method');
  t.end();
});

test('makes a request with parameters', function (t) {
  var url = 'http://localhost:9999/get?param1=param1';
  var req = httpify({url: url}, noop);
  
  t.equal(req.url, url, 'correct url');
  t.end();
});

test('posts a request with a body', function (t) {
  var url = 'http://localhost:9999/post';
  var options = {
    url: url,
    method: 'POST',
    data: {
      name: 'name'
    }
  };
  
  var req = httpify(options, noop);
  
  t.equal(req.url, url, 'correct url');
  t.equal(req.method, 'POST', 'correct method');
  t.end();
});