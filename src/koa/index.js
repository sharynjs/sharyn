// @flow

import { ApolloServer } from 'apollo-server-koa'
import colors from 'colors/safe'
import exitHook from 'exit-hook'

import Koa from 'koa'
import body from 'koa-body'
import compress from 'koa-compress'
import favicon from 'koa-favicon'
import mount from 'koa-mount'
import Router from 'koa-router'
import session from 'koa-session'
import enforceHttps from 'koa-sslify'
import serveStatic from 'koa-static'

import {
  NODE_ENV,
  PORT,
  TESTING_PORT,
  IS_TEST_ENV,
  IS_LOCAL_ENV_TYPE,
  ENV_TYPE,
  SESSION_SECRET_KEY,
} from '../env'
import {
  hasFile,
  hasPackage,
  requireCascadeFromSource,
  pathCascade,
  requireSharyn,
  sharynConfig,
} from '../check-setup'

console.log(sharynConfig)

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
    const hasHeroku = hasFile('Procfile')
    IS_LOCAL_ENV_TYPE || app.use(enforceHttps({ trustProtoHeader: hasHeroku }))
  }

  if (hasPackage('koa-session')) {
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
    app.use(body({ multipart: true }))
  }

  if (hasPackage('koa-compress')) {
    app.use(compress())
  }

  if (hasPackage('koa-mount') && hasPackage('koa-static')) {
    app
      .use(mount('/static', serveStatic('dist')))
      .use(mount('/static', serveStatic('public')))
      .use(mount('/', serveStatic('public/root')))
  }

  if (hasPackage('koa-favicon')) {
    app.use(
      favicon(
        `./${pathCascade(
          'public/img/favicon/favicon.ico',
          'public/img/favicon.ico',
          'public/favicon.ico',
        ) || 'undefined'}`,
      ),
    )
  }

  if (hasPackage('apollo-server-koa')) {
    const apolloServer = new ApolloServer(options?.apolloConfig ?? {})
    apolloServer.applyMiddleware({ app })
  }

  routing(router)
  app.use(router.routes()).use(router.allowedMethods())

  // eslint-disable-next-line no-console
  app.on('error', err => console.error(err))

  server = app.listen(options?.port || port)
}

export const startServer = startServer_
export const stopServer = stopServer_
