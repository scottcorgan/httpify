var request = require('reqwest');

// Wrapper to make the features more similiar between
// request and reqwest

module.exports = function (options, callback) {
  try{
    if (options.body) options.data = JSON.parse(options.body);
  }
  catch(e) {}
  
  if (options.form) options.data = options.form;
  options.type = options.type || 'json';
  
  options.error = function (response) {
    callback(response);
  };
  
  options.success = function (response) {
    var body = response.self || response;
    
    callback(null, body, body);
  };
  
  return request(options);
};