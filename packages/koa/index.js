/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */

const { hasPackage } = require('@sharyn/check-setup')
const colors = require('colors/safe')

hasPackage('koa', true)

const PORT = hasPackage('@sharyn/env') ? require('@sharyn/env').PORT : 8000

const { NODE_ENV } = process.env

const Koa = require('koa')

const app = new Koa()
let server

const startServer = () => {
  // eslint-disable-next-line no-console
  console.log(
    `${colors.cyan('[koa]')} Server running on port ${PORT} ${NODE_ENV ? `(${NODE_ENV})` : ''}`,
  )
  server = app.listen(PORT)
}

const stopServer = () => {
  if (server) {
    return server.close()
  }
  throw Error('Tried to stop the server but no server was running')
}

exports.startServer = startServer
exports.stopServer = stopServer
