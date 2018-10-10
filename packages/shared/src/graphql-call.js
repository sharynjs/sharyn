// @flow

// flow-disable-next-line
import spread from '@sharyn/util/spread'
import call from './call'

const graphqlCall = async ({
  urlBase,
  urlPath,
  authorizationBearer,
  cookie,
  variables = {},
  query,
  mapRespData,
}: {
  urlBase?: string,
  urlPath?: string,
  authorizationBearer?: string,
  cookie?: string,
  variables?: Object,
  query: string,
  mapRespData?: Function,
}) => {
  let callResp
  try {
    callResp = await call({
      urlBase,
      urlPath,
      authorizationBearer,
      cookie,
      body: { query, variables },
    })
  } catch (err) {
    throw err.response?.data?.errors ? err.response.data.errors[0] : err
  }
  let dataResp = {}
  try {
    dataResp = mapRespData ? mapRespData(callResp?.data?.data) : callResp?.data?.data
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
  }
  return {
    ...spread({ errors: callResp?.data?.errors }),
    ...dataResp,
  }
}

export default graphqlCall
