'use strict'
const data = require('../knexfile')
function updateDatabase(data){
    return newValue
}

exports.handler = function ( event, context , callback){
    if(event.httpMethod === 'POST' && event.path === '/my/path') {
        const requestBody = JSON.parse(event.body);
        const newValue = updateDatabase(requestBody);
        callback(null, {
          statusCode: 200,
          body: newValue
        });
      } else {
        callback(null, {
          statusCode: 400,
          body: {}
        });
      }
    }