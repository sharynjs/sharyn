// @flow

const getPageInfo = (route: Object, state: Object, match: Object) => {
  const pageInfo = { ...route }
  if (route.title !== undefined) {
    pageInfo.title = typeof route.title === 'function' ? route.title(state, match) : route.title
  }
  if (route.mobileTitle !== undefined) {
    pageInfo.mobileTitle =
      typeof route.mobileTitle === 'function' ? route.mobileTitle(state, match) : route.mobileTitle
  }
  if (route.backNav !== undefined) {
    pageInfo.backNav =
      typeof route.backNav === 'function' ? route.backNav(state, match) : route.backNav
  }
  return pageInfo
}

export default getPageInfo
