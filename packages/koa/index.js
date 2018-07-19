/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */

const { hasPackage } = require('@sharyn/check-setup')

hasPackage('koa', true)

const PORT = hasPackage('@sharyn/env') ? require('@sharyn/env').PORT : 8000

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
