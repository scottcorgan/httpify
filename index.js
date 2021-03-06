var request = require('request')

if (typeof Promise !== 'function') {
  throw new TypeError('Please provide a Promise polyfill as your environment doesn\'t support them natively')
}

module.exports = function (options, callback) {

  return new Promise(function (resolve, reject) {

    request(options, function (err, response, body) {

      var status = (response) ? response.statusCode : 0
      callback = callback || function () {}

      if (err) {
        callback(err)
        reject(err)
        return
      }

      try{
        response.body = JSON.parse(body)
      }
      catch (e) {}

      if (status >= 400 && status < 600) {
        callback(null, response, response.body)
        reject(response)
        return
      }

      callback(null, response, response.body)
      resolve(response)
    })
  })
}
