/* eslint-disable import/no-unresolved */

const { hasPackage } = require('@sharyn/check-setup')

hasPackage('koa', true)
hasPackage('@sharyn/env', true)

const { PORT } = require('@sharyn/env')
const Koa = require('koa')

const app = new Koa()
let server

const startServer = () => {
  server = app.listen(PORT || 8000)
}

const stopServer = () => {
  if (server) {
    return server.close()
  }
  throw Error('Tried to stop the server but no server was running')
}

exports.startServer = startServer
exports.stopServer = stopServer
