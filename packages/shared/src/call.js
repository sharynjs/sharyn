// @flow

// flow-disable-next-line
import { requireSharyn } from '@sharyn/check-setup'

import axios from 'axios'

const spread = requireSharyn('util/spread')
const spreadIf = requireSharyn('util/spread-if')

const call = ({
  urlBase,
  urlPath = '/graphql',
  body,
  authorizationBearer,
  cookie,
}: {
  urlBase: string,
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
