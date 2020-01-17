'use strict'
const data = require('../database/food.json')
function updateDatabase(data){
    const newValue = updateDatabase(res.body);
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
        callback(null,error, {
          statusCode: 400,
          body: {message:'Not Found'}
        });
      }
    }
