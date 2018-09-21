// @flow

// flow-disable-next-line
import graphqlCall from '@sharyn/shared/graphql-call'
// flow-disable-next-line
import spread from '@sharyn/util/spread'

let configuredUrlBase
let configuredUrlPath

let configuredGraphqlRequest
let configuredGraphqlSuccess
let configuredGraphqlFailure

let configuredFetchPageRequest
let configuredFetchPageSuccess
let configuredFetchPageFailure

export const configureGraphqlThunk = ({
  request,
  success,
  failure,
  urlBase,
  urlPath,
}: {
  request: Function,
  success: Function,
  failure: Function,
  urlBase?: string,
  urlPath?: string,
}) => {
  configuredGraphqlRequest = request
  configuredGraphqlSuccess = success
  configuredGraphqlFailure = failure
  configuredUrlBase = urlBase
  configuredUrlPath = urlPath
}

export const configureFetchPageThunk = ({
  request,
  success,
  failure,
}: {
  request: Function,
  success: Function,
  failure: Function,
}) => {
  configuredFetchPageRequest = request
  configuredFetchPageSuccess = success
  configuredFetchPageFailure = failure
}

export const graphqlThunk = ({
  // flow-disable-next-line
  urlBase = configuredUrlBase,
  // flow-disable-next-line
  urlPath = configuredUrlPath,
  authorizationBearer,
  urlParams,
  mapUrlParams,
  fields,
  mapFields,
  query,
  mapResp,
  asyncKey,
  request = configuredGraphqlRequest,
  success = configuredGraphqlSuccess,
  failure = configuredGraphqlFailure,
  throwErr = true,
}: {
  urlBase?: string,
  urlPath?: string,
  authorizationBearer?: string,
  urlParams?: Object,
  mapUrlParams?: Function,
  fields?: Object,
  mapFields?: Function,
  query: string,
  mapResp?: Function,
  asyncKey?: string,
  request?: Function,
  success?: Function,
  failure?: Function,
  throwErr?: boolean,
}) => async (dispatch: Function) => {
  if (!(request && success && failure)) {
    throw Error(
      'You need to configure a request, success, and failure action creator before using graphqlThunk',
    )
  }
  dispatch(request(asyncKey))
  let data
  try {
    data = await graphqlCall({
      urlBase,
      urlPath,
      authorizationBearer,
      urlParams,
      mapUrlParams,
      fields,
      mapFields,
      query,
      mapResp,
    })
    dispatch(success({ data, ...spread({ asyncKey }) }))
    return data
  } catch (error) {
    dispatch(failure({ error, ...spread({ asyncKey }) }))
    if (throwErr) {
      throw error
    }
    return error
  }
}

export const fetchPageThunk = (options: Object) =>
  graphqlThunk({
    ...options,
    asyncKey: 'page',
    request: configuredFetchPageRequest,
    success: configuredFetchPageSuccess,
    failure: configuredFetchPageFailure,
  })
