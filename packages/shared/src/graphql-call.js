// @flow

import axios from 'axios'
// flow-disable-next-line
import spread from '@sharyn/util/spread'
// flow-disable-next-line
import spreadIf from '@sharyn/util/spread-if'

const graphqlCall = ({
  urlBase,
  urlPath = '/graphql',
  jwt,
  query,
  variables,
  cookie,
}: {
  urlBase: string,
  urlPath?: string,
  jwt?: string,
  query: string,
  variables?: Object,
  cookie?: string,
}) =>
  axios.post(`${urlBase}${urlPath}`, spread({ query, variables }), {
    headers: {
      ...spreadIf(jwt, { Authorization: `Bearer ${jwt ?? 'undefined'}` }),
      ...spread({ cookie }),
    },
  })

export default graphqlCall
