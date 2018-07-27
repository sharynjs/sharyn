// @flow

const loggedFilter = (
  { loggedOutOnly, loggedInOnly }: { loggedOutOnly?: boolean, loggedInOnly?: boolean },
  isLoggedIn: boolean,
) => (isLoggedIn ? !loggedOutOnly : !loggedInOnly)

export default loggedFilter
