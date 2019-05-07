// @flow

import { IS_LOCAL_ENV_TYPE, NO_SSR } from '../env'
import { graphqlCall, findMatch } from '../shared'

const getSsrData = async ({
  user,
  allRoutes,
  url,
  cookie,
  host,
  method,
  body,
}: {
  user?: Object,
  allRoutes: Object[],
  url: string,
  host: string,
  method: string,
  body?: Object,
  cookie?: string,
}) => {
  let data
  if (!NO_SSR) {
    const { match, route } = findMatch(allRoutes, url, !!user)
    if (match) {
      const urlBase = `http${IS_LOCAL_ENV_TYPE ? '' : 's'}://${host}`
      if (method === 'GET' && route.mainQuery) {
        const { query, variables, mapRespData } = route.mainQuery
        data = await graphqlCall({
          urlBase,
          query,
          variables: variables instanceof Function ? variables(match.params) : variables,
          mapRespData,
          cookie,
        })
      }
      if (method === 'POST' && route.mainMutation) {
        const { query, variables, mapRespData, successRedirect } = route.mainMutation
        data =
          (await graphqlCall({
            urlBase,
            query,
            variables: variables instanceof Function ? variables(match.params, body) : variables,
            mapRespData,
            cookie,
          })) ?? {}
        data.previousFields = body
        if (!data.errors && !data.invalidFields && successRedirect) {
          return {
            redirectTo:
              successRedirect instanceof Function
                ? successRedirect(data, body, match.params)
                : successRedirect,
          }
        }
      }
    } else {
      return { is404: true }
    }
  }

  return { data }
}

export default getSsrData
