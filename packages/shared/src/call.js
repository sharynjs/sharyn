// @flow

import axios from 'axios'
// flow-disable-next-line
import spread from '@sharyn/util/spread'
// flow-disable-next-line
import spreadIf from '@sharyn/util/spread-if'

const call = ({
  urlBase = '',
  urlPath = '/graphql',
  authorizationBearer,
  cookie,
  body,
  withCredentials,
}: {
  urlBase?: string,
  urlPath?: string,
  authorizationBearer?: string,
  cookie?: string,
  body?: any,
  withCredentials?: boolean,
}) =>
  axios.post(`${urlBase}${urlPath}`, body, {
    headers: {
      ...spreadIf(authorizationBearer, {
        Authorization: `Bearer ${authorizationBearer ?? 'undefined'}`,
      }),
      ...spread({ cookie }),
    },
    ...spread({ withCredentials }),
  })

export default call
