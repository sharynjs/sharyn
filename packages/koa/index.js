/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies, global-require */

const { hasPackage } = require('@sharyn/check-setup')
const colors = require('colors/safe')
const exitHook = require('exit-hook')

hasPackage('koa', true)
const PREFIX = colors.cyan('[sharyn/koa]')

const { NODE_ENV } = process.env
const PORT = process.env.PORT || 8000

const Koa = require('koa')

const app = new Koa()
let server

if (hasPackage('koa-mount') && hasPackage('koa-static')) {
  const mount = require('koa-mount')
  const serveStatic = require('koa-static')
  app.use(mount('/static', serveStatic('dist'))).use(mount('/static', serveStatic('public')))
}

if (hasPackage('koa-favicon')) {
  app.use(require('koa-favicon')(`./public/img/favicon.ico`))
}

const stopServer = options => {
  if (server) {
    if (!(options && options.silent)) {
      // eslint-disable-next-line no-console
      console.log() // cross-os newline
      // eslint-disable-next-line no-console
      console.log(`${PREFIX} Server stopped`)
    }
    return server.close()
  }
  throw Error('Tried to stop the server but no server was running')
}

const startServer = options => {
  if (!(options && options.silent)) {
    // eslint-disable-next-line no-console
    console.log(`${PREFIX} Server running on port ${PORT} ${NODE_ENV ? `(${NODE_ENV})` : ''}`)
    exitHook(() => stopServer())
  }
  server = app.listen(PORT)
}

exports.startServer = startServer
exports.stopServer = stopServer
