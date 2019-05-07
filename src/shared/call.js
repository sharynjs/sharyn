// @flow

import axios from 'axios'

import spread from '../util/spread'
import spreadIf from '../util/spreadIf'

const call = ({
  urlBase = '',
  urlPath = '/graphql',
  authorizationBearer,
  cookie,
  body,
}: {
  urlBase?: string,
  urlPath?: string,
  authorizationBearer?: string,
  cookie?: string,
  body?: any,
}) =>
  axios.post(`${urlBase}${urlPath}`, body, {
    headers: {
      ...spreadIf(authorizationBearer, {
        Authorization: `Bearer ${authorizationBearer ?? 'undefined'}`,
      }),
      ...spread({ cookie }),
    },
  })

export default call
