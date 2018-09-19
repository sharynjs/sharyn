// @flow

import axios from 'axios'
// flow-disable-next-line
import spread from '@sharyn/util/spread'
// flow-disable-next-line
import spreadIf from '@sharyn/util/spread-if'

const call = ({
  urlBase = '',
  urlPath = '/graphql',
  body,
  authorizationBearer,
  cookie,
}: {
  urlBase?: string,
  urlPath?: string,
  body?: any,
  authorizationBearer?: string,
  cookie?: string,
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
