/* eslint-disable import/order, import/no-unresolved */

const hasPackage = require('../../shared/has-package')

if (!hasPackage('koa')) {
  throw Error('You need to have koa installed to use @sharyn/koa')
}

if (!hasPackage('@sharyn/env')) {
  throw Error('You need to have @sharyn/env installed to use @sharyn/koa')
}

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
  throw Error('No server was running')
}

exports.startServer = startServer
exports.stopServer = stopServer
