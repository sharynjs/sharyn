// @flow

/* eslint-disable import/no-extraneous-dependencies */

import { matchPath } from 'react-router-dom'
import loggedFilter from './logged-filter'

type Route = { path?: string, loggedOutOnly?: boolean, loggedInOnly?: boolean }
type RouteAndCmp = { route: Route, component: Function }

const findMatch = (routesAndCmps: RouteAndCmp[], pathname: string, isLoggedIn: boolean) => {
  const routesAndCmpsWithGoodPaths = routesAndCmps.map(rac => ({
    ...rac,
    route: {
      ...rac.route,
      path: typeof rac.route.path === 'function' ? rac.route.path() : rac.route.path,
    },
  }))
  const filteredRoutesAndCmps = routesAndCmpsWithGoodPaths.filter(({ route }) =>
    loggedFilter(route, isLoggedIn),
  )
  const notFoundRouteAndCmp = filteredRoutesAndCmps.find(({ route }) => !route.path)
  if (!notFoundRouteAndCmp) {
    throw Error('You need a route without path to render a 404 page')
  }
  let match
  const activeRouteAndCmp: Object =
    filteredRoutesAndCmps.find(({ route }) => {
      match = matchPath(pathname, route)
      return match
    }) || notFoundRouteAndCmp
  const { path, exact, ...route } = activeRouteAndCmp.route // Removing these properties from route
  return {
    match,
    route,
    Component: activeRouteAndCmp.component,
    // flow-disable-next-line
    routes: filteredRoutesAndCmps.map(rac => rac.route),
  }
}

export default findMatch
