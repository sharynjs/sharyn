// @flow

// flow-disable-next-line
import graphqlCall from '@sharyn/shared/graphql-call'

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
}: {
  request: Function,
  success: Function,
  failure: Function,
}) => {
  configuredGraphqlRequest = request
  configuredGraphqlSuccess = success
  configuredGraphqlFailure = failure
}

export const configurefetchPageThunk = ({
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
  urlBase,
  urlPath,
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
  asyncKey: string,
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
    dispatch(success({ data, asyncKey }))
  } catch (error) {
    dispatch(failure({ error, asyncKey }))
    if (throwErr) {
      throw error
    }
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
