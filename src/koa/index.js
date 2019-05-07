// @flow

/* eslint-disable import/no-dynamic-require, global-require */

import colors from 'colors/safe'
import exitHook from 'exit-hook'

import {
  NODE_ENV,
  PORT,
  TESTING_PORT,
  IS_TEST_ENV,
  IS_LOCAL_ENV_TYPE,
  ENV_TYPE,
  SESSION_SECRET_KEY,
  // flow-disable-next-line
} from '@sharyn/env'
import {
  appRoot,
  hasFile,
  hasPackage,
  requireCascadeFromSource,
  pathCascade,
  requireSharyn,
} from '../check-setup'
// flow-disable-next-line
const Koa = hasPackage('koa', true) && require(`${appRoot}/node_modules/koa`)
// flow-disable-next-line
const Router = hasPackage('koa-router', true) && require(`${appRoot}/node_modules/koa-router`)

const router = new Router()

const PREFIX = colors.cyan('[sharyn/koa]')

export const DEFAULT_PORT = 8020
export const DEFAULT_TESTING_PORT = 8021

const port = IS_TEST_ENV ? TESTING_PORT || DEFAULT_TESTING_PORT : PORT || DEFAULT_PORT

const hasDocker = hasFile('docker-compose.yml')

let server

const stopServer_ = (options?: Object) => {
  if (server) {
    if (!(options?.silent || IS_TEST_ENV)) {
      // eslint-disable-next-line no-console
      console.log() // cross-os newline
      // eslint-disable-next-line no-console
      console.log(`${PREFIX} Server stopped`)
    }
    const sharynDb = requireSharyn('db')
    sharynDb && sharynDb.knex.destroy()

    const sharynRedis = hasDocker && requireSharyn('redis')
    sharynRedis && sharynRedis.quit()

    return server.close()
  }
  throw Error('Tried to stop the server but no server was running')
}

const startServer_ = (manualRouting: Function, options?: Object) => {
  const routing =
    manualRouting || requireCascadeFromSource('_server/routing.js', 'server/routing.js')
  if (!routing) {
    throw Error(
      'You must pass a routing function to startServer, or have a _server/routing.js file exporting the routing function',
    )
  }

  if (!(options?.silent || IS_TEST_ENV)) {
    // eslint-disable-next-line no-console
    console.log(
      `\n${PREFIX} 🌹 Server running on PORT: ${port} | NODE_ENV: ${NODE_ENV} | ENV_TYPE: ${ENV_TYPE}`,
    )
  }

  exitHook(() => stopServer_())

  const app = new Koa()
  if (hasPackage('koa-session')) {
    app.keys = [SESSION_SECRET_KEY]
  }

  app.use(async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      ctx.redirect('/error')
      ctx.app.emit('error', err, ctx)
    }
  })

  if (hasPackage('koa-sslify')) {
    // flow-disable-next-line
    const enforceHttps = require('koa-sslify')
    const hasHeroku = hasFile('Procfile')
    IS_LOCAL_ENV_TYPE || app.use(enforceHttps({ trustProtoHeader: hasHeroku }))
  }

  if (hasPackage('koa-session')) {
    // flow-disable-next-line
    const session = require('koa-session')
    const sessionOptions: Object = {
      maxAge: 1000 * 60 * 60 * 24 * 14, // 2 weeks
      rolling: true,
    }
    const sharynRedis = hasDocker && requireSharyn('redis')
    if (sharynRedis) {
      sessionOptions.store = {
        get: async key => JSON.parse(await sharynRedis.getAsync(`session:${key}`)),
        set: (key, sess) => sharynRedis.setAsync(`session:${key}`, JSON.stringify(sess)),
        destroy: key => sharynRedis.delAsync(key),
      }
    }
    app.use(session(sessionOptions, app))
  }

  if (hasPackage('koa-body')) {
    // flow-disable-next-line
    app.use(require('koa-body')({ multipart: true }))
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
    app
      .use(mount('/static', serveStatic('dist')))
      .use(mount('/static', serveStatic('public')))
      .use(mount('/', serveStatic('public/root')))
  }

  if (hasPackage('koa-favicon')) {
    app.use(
      // flow-disable-next-line
      require('koa-favicon')(
        `./${pathCascade(
          'public/img/favicon/favicon.ico',
          'public/img/favicon.ico',
          'public/favicon.ico',
        )}`,
      ),
    )
  }

  if (hasPackage('apollo-server-koa')) {
    // flow-disable-next-line
    const { ApolloServer } = require('apollo-server-koa')
    const apolloServer = new ApolloServer(options?.apolloConfig ?? {})
    apolloServer.applyMiddleware({ app })
  }

  routing(router)
  app.use(router.routes()).use(router.allowedMethods())

  app.on('error', err => console.error(err))

  server = app.listen(options?.port || port)
}

export const startServer = startServer_
export const stopServer = stopServer_
