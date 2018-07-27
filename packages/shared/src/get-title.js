// @flow

type Route = { title: string, path?: string }

const getTitle = (routes: Route[], pathname: string, pageData?: Object) => {
  const notFoundRoute = routes.find(r => !r.path)
  if (!notFoundRoute) {
    throw Error('You need a route without path to render a 404 page')
  }
  const { title } = routes.find(({ path }) => pathname === path) || notFoundRoute

  if (title) {
    return typeof title === 'function' ? title(pageData) : title
  }
  return undefined
}

export default getTitle
