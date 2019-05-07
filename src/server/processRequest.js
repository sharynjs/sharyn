// @flow

import renderPage from './renderPage'

const processRequest = async (
  ctx: Object,
  getRenderConfig: Function,
  { is404, redirectTo, data }: { is404?: boolean, redirectTo?: string, data?: Object } = {},
) => {
  if (is404) {
    ctx.status = 404
  }
  if (redirectTo) {
    ctx.redirect(redirectTo)
  } else {
    const { routerContext, html }: { routerContext: Object, html: string } = renderPage({
      ...getRenderConfig({ pageData: data, user: ctx.session?.user }),
      url: ctx.req.url,
    })
    if (routerContext.action === 'REPLACE') {
      ctx.redirect(routerContext.url)
    } else {
      ctx.body = html
    }
  }
}

export default processRequest
