// @flow

// flow-disable-next-line
import { startServer } from '@sharyn/koa'
// flow-disable-next-line
import { htmlBase } from '@sharyn/server'

const routing = (router: Object) => {
  router.get('*', ctx => {
    ctx.body = htmlBase()
  })
}

startServer(routing)
