'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const server = require('./server')
const app = awsServerlessExpress.createServer(server)

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)