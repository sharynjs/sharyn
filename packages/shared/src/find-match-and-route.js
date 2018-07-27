// @flow

/* eslint-disable import/no-extraneous-dependencies */

import { matchPath } from 'react-router-dom'

type Route = { path?: string }

const findMatchAndRoute = (routes: Route[], pathname: string) => {
  const notFoundRoute = routes.find(r => !r.path)
  if (!notFoundRoute) {
    throw Error('You need a route without path to render a 404 page')
  }
  let match
  const activeRoute: Object =
    routes.find(route => {
      match = matchPath(pathname, route)
      return match
    }) || notFoundRoute
  return { match, route: activeRoute }
}

export default findMatchAndRoute
