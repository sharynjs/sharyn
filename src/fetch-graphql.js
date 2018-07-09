// @flow

type Options = {
  query: string,
  variables?: Object,
  host?: string,
  path?: string,
  cookie?: string,
}

export const fetchGraphql = async (
  { query, variables, host, path, cookie }: Options,
  fetchOptions?: Object,
) => {
  const body: Object = { query }
  if (variables) {
    body.variables = variables
  }

  const defaultFetchOptions: Object = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    credentials: 'same-origin',
  }
  if (cookie) {
    defaultFetchOptions.headers.cookie = cookie
  }
  return (await fetch(
    `${host || ''}${path || '/graphql'}`,
    Object.assign(defaultFetchOptions, fetchOptions),
  )).json()
}

export default fetchGraphql
