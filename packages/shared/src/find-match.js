// @flow

/* eslint-disable import/no-extraneous-dependencies */

import matchPath from 'react-router/matchPath'

import loggedFilter from './logged-filter'

type Route = { path?: string, loggedOutOnly?: boolean, loggedInOnly?: boolean }

const findMatch = (routes: Object[], pathname: string, isLoggedIn: boolean) => {
  const routesWithPlainPaths: Route[] = routes.map(r => ({
    ...r,
    path: typeof r.path === 'function' ? r.path() : r.path,
  }))
  const accessibleRoutes: Route[] = routesWithPlainPaths.filter(r => loggedFilter(r, isLoggedIn))
  const notFoundRoute = accessibleRoutes.find(({ path }) => !path)
  if (!notFoundRoute) {
    throw Error('You need a route without path to render a 404 page')
  }
  let match
  const activeRoute: Object =
    accessibleRoutes.find(route => {
      match = matchPath(pathname, route)
      return match
    }) || notFoundRoute
  const { path, exact, ...route } = activeRoute // Removing these properties from route
  return {
    match,
    route,
    routesWithPlainPaths,
    accessibleRoutes,
    notFoundRoute,
  }
}

export default findMatch
