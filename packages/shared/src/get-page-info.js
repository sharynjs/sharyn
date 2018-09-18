// @flow

const getPageInfo = (route: Object, state: Object) => {
  const pageInfo = {}
  if (route.title) {
    pageInfo.title = typeof route.title === 'function' ? route.title(state) : route.title
  }
  if (route.backNav) {
    pageInfo.backNav = typeof route.backNav === 'function' ? route.backNav(state) : route.backNav
  }
  return pageInfo
}

export default getPageInfo
