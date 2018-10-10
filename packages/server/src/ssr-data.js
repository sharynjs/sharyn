// @flow

// flow-disable-next-line
import { IS_LOCAL_ENV_TYPE, NO_SSR } from '@sharyn/env'
// flow-disable-next-line
import { graphqlCall, findMatch } from '@sharyn/shared'

const getSsrData = async (ctx: Object, allRoutes: Object[]) => {
  let data
  const { user } = ctx.session

  if (!NO_SSR) {
    const { match, route } = findMatch(allRoutes, ctx.req.url, !!user)
    if (match) {
      const { cookie } = ctx.req.headers
      const urlBase = `http${IS_LOCAL_ENV_TYPE ? '' : 's'}://${ctx.request.host}`
      if (ctx.request.method === 'GET' && route.mainQuery) {
        const { query, variables, mapRespData } = route.mainQuery
        data = await graphqlCall({
          urlBase,
          query,
          variables: variables instanceof Function ? variables(match.params) : variables,
          mapRespData,
          cookie,
        })
      }
      if (ctx.request.method === 'POST' && route.mainMutation) {
        const { query, variables, mapRespData, successRedirect } = route.mainMutation
        data =
          (await graphqlCall({
            urlBase,
            query,
            variables:
              variables instanceof Function ? variables(match.params, ctx.request.body) : variables,
            mapRespData,
            cookie,
          })) ?? {}
        data.previousFields = ctx.request.body
        if (!data.errors && !data.invalidFields && successRedirect) {
          ctx.redirect(
            successRedirect instanceof Function
              ? successRedirect(data, ctx.request.body, match.params)
              : successRedirect,
          )
          return {}
        }
      }
    } else {
      ctx.status = 404
    }
  }

  return data
}

export default getSsrData
