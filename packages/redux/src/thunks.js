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

let configuredOptionsFn

let configuredFetchPageRequest
let configuredFetchPageSuccess
let configuredFetchPageFailure

let configuredOnDataErrors
let configuredOnCallError

export const configureGraphqlThunk = ({
  request,
  success,
  failure,
  urlBase,
  urlPath,
  options = () => ({}),
  onDataErrors,
  onCallError,
}: {
  request: Function,
  success: Function,
  failure: Function,
  urlBase?: string,
  urlPath?: string,
  options?: Function,
  onDataErrors?: Function,
  onCallError?: Function,
}) => {
  configuredGraphqlRequest = request
  configuredGraphqlSuccess = success
  configuredGraphqlFailure = failure
  configuredUrlBase = urlBase
  configuredUrlPath = urlPath
  configuredOptionsFn = options
  configuredOnDataErrors = onDataErrors
  configuredOnCallError = onCallError
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
  query,
  variables,
  extraBody,
  mapRespData,
  fields = {},
  urlParams = {},
  successRedirect,
  onSuccess,
  onInvalidFields,
  // flow-disable-next-line
  onDataErrors = configuredOnDataErrors,
  // flow-disable-next-line
  onCallError = configuredOnCallError,
  routerHistory,
  asyncKey,
  request = configuredGraphqlRequest,
  success = configuredGraphqlSuccess,
  failure = configuredGraphqlFailure,
  options: optionsFn = configuredOptionsFn,
  throwErr = true,
  axiosOptions,
  withCredentials,
  cancelToken,
}: {
  urlBase?: string,
  urlPath?: string,
  authorizationBearer?: string,
  urlParams?: Object,
  mapUrlParams?: Function,
  query: string,
  variables?: Object,
  extraBody?: Object,
  mapRespData?: Function,
  fields?: Object,
  urlParams?: Object,
  successRedirect?: Function | string,
  onSuccess?: Function,
  onDataErrors?: Function,
  onInvalidFields?: Function,
  onCallError?: Function,
  routerHistory?: Object,
  asyncKey?: string,
  request?: Function,
  success?: Function,
  failure?: Function,
  throwErr?: boolean,
  options?: Function,
  axiosOptions?: Object,
  withCredentials?: boolean,
  cancelToken?: any,
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
      query,
      variables: variables instanceof Function ? variables(urlParams, fields) : variables,
      extraBody,
      mapRespData,
      axiosOptions,
      withCredentials,
      cancelToken,
      ...optionsFn(),
    })
    dispatch(success({ data, ...spread({ asyncKey }) }))
    if (data.errors) {
      onDataErrors && onDataErrors(data)
    }
    if (data.invalidFields) {
      onInvalidFields && onInvalidFields(data)
    }
    if (!data.errors && !data.invalidFields) {
      if (successRedirect) {
        if (!routerHistory) {
          throw Error(
            'In order to use successRedirect, you need to provide a routerHistory to graphqlThunk',
          )
        }
        routerHistory.push(
          successRedirect instanceof Function ? successRedirect(data, variables) : successRedirect,
        )
      }
      onSuccess && onSuccess(data)
    }
    return data
  } catch (error) {
    dispatch(failure({ error, ...spread({ asyncKey }) }))
    onCallError && onCallError(error)
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
