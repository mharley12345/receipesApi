'use strict'
module.exports = () =>{
const data = require('../database/food.json')
function updateDatabase(data){
    const newValue = updateDatabase(res.body);
    return newValue
}

exports.handler = function ( event, context , callback){
    if(event.httpMethod === 'POST' && event.path === '/database/food') {
        const requestBody = JSON.parse(event.body);
        const newValue = updateDatabase(requestBody);
        callback(null, {
          statusCode: 200,
          body: newValue
        });
      } else {
        callback(null, {
          statusCode: 400,

          body:"No Message"
        });
      }
    }
}