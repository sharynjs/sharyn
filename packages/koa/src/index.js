// @flow

/* eslint-disable import/no-extraneous-dependencies, import/no-dynamic-require, global-require */

import colors from 'colors/safe'
import exitHook from 'exit-hook'

// flow-disable-next-line
import { NODE_ENV, PORT, TESTING_PORT, IS_TEST_ENV, IS_LOCAL_ENV } from '@sharyn/env'
// flow-disable-next-line
import { appRoot, hasFile, hasPackage } from '@sharyn/check-setup'
// flow-disable-next-line
const Koa = hasPackage('koa', true) && require(`${appRoot}/node_modules/koa`)
// flow-disable-next-line
const Router = hasPackage('koa-router', true) && require(`${appRoot}/node_modules/koa-router`)

const router = new Router()

const PREFIX = colors.cyan('[sharyn/koa]')

export const DEFAULT_PORT = 8020
export const DEFAULT_TESTING_PORT = 8021

const port = IS_TEST_ENV ? TESTING_PORT || DEFAULT_TESTING_PORT : PORT || DEFAULT_PORT

let server

const stopServer_ = (options?: Object) => {
  if (server) {
    if (!(options?.silent || IS_TEST_ENV)) {
      // eslint-disable-next-line no-console
      console.log() // cross-os newline
      // eslint-disable-next-line no-console
      console.log(`${PREFIX} Server stopped`)
    }
    if (hasPackage('@sharyn/db')) {
      // flow-disable-next-line
      require('@sharyn/db').knex.destroy()
    }
    if (hasPackage('@sharyn/redis')) {
      // flow-disable-next-line
      require('@sharyn/redis').quit()
    }
    return server.close()
  }
  throw Error('Tried to stop the server but no server was running')
}

const startServer_ = (manualRouting: Function, options?: Object) => {
  let routing = manualRouting
  if (!routing) {
    if (hasFile('src/_server/routing.js')) {
      // flow-disable-next-line
      const routingModule = require(`${appRoot}/src/_server/routing.js`)
      routing = routingModule.default ? routingModule.default : routingModule
    } else {
      throw Error(
        'You must pass a routing function to startServer, or have a _server/routing.js file exporting the routing function',
      )
    }
  }

  if (!(options?.silent || IS_TEST_ENV)) {
    // eslint-disable-next-line no-console
    console.log(`${PREFIX} Server running on port ${port} ${NODE_ENV ? `(${NODE_ENV})` : ''}`)
  }

  exitHook(() => stopServer_())

  const app = new Koa()

  if (hasPackage('koa-sslify')) {
    // flow-disable-next-line
    const enforceHttps = require('koa-sslify')
    const hasHeroku = hasFile('Procfile')
    IS_LOCAL_ENV || app.use(enforceHttps({ trustProtoHeader: hasHeroku }))
  }

  if (hasPackage('koa-compress')) {
    // flow-disable-next-line
    app.use(require('koa-compress')())
  }

  if (hasPackage('koa-mount') && hasPackage('koa-static')) {
    // flow-disable-next-line
    const mount = require('koa-mount')
    // flow-disable-next-line
    const serveStatic = require('koa-static')
    app.use(mount('/static', serveStatic('dist'))).use(mount('/static', serveStatic('public')))
  }

  if (hasPackage('koa-favicon')) {
    // flow-disable-next-line
    app.use(require('koa-favicon')(`./public/img/favicon.ico`))
  }

  routing(router)
  app.use(router.routes()).use(router.allowedMethods())

  server = app.listen(options?.port || port)
}

export const startServer = startServer_
export const stopServer = stopServer_
