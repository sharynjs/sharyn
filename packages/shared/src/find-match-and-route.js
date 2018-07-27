// @flow

/* eslint-disable import/no-extraneous-dependencies */

import { matchPath } from 'react-router-dom'
import loggedFilter from './logged-filter'

type Route = { path?: string, loggedInOnly?: boolean, loggedOutOnly?: boolean }

const findMatchAndRoute = (routes: Route[], pathname: string, isLoggedIn: boolean) => {
  const filteredRoutes = routes.filter(r => loggedFilter(r, isLoggedIn))
  const notFoundRoute = filteredRoutes.find(r => !r.path)
  if (!notFoundRoute) {
    throw Error('You need a route without path to render a 404 page')
  }
  let match
  const activeRoute: Object =
    filteredRoutes.find(route => {
      match = matchPath(pathname, route)
      return match
    }) || notFoundRoute
  return { match, route: activeRoute }
}

export default findMatchAndRoute
