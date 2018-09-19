// @flow

// flow-disable-next-line
import spread from '@sharyn/util/spread'
import call from './call'

const graphqlCall = async ({
  urlBase,
  query,
  urlParams,
  mapUrlParams,
  mapResp,
  cookie,
}: {
  urlBase?: string,
  query: string,
  urlParams: Object,
  mapUrlParams?: Function,
  mapResp?: Function,
  cookie?: string,
}) => {
  let callResp
  const variables = mapUrlParams ? mapUrlParams(urlParams) : urlParams
  try {
    callResp = await call({ urlBase, cookie, body: { query, variables } })
  } catch (err) {
    throw err.response?.data?.errors ? err.response.data.errors[0] : err
  }
  return {
    ...spread({ errors: callResp?.data?.errors }),
    ...(mapResp ? mapResp(callResp?.data?.data) : callResp?.data?.data),
  }
}

export default graphqlCall
