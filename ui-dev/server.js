// @flow

/* eslint-disable import/no-extraneous-dependencies */

// flow-disable-next-line
import { startServer } from '@sharyn/koa'
// flow-disable-next-line
import htmlBase from '@sharyn/server/html-base'

const routing = (router: Object) => {
  router.get('*', ctx => {
    ctx.body = htmlBase({})
  })
}

startServer(routing)
