const React = require('react')
const { Route } = require('react-router')

const { useEffect } = React

const Refresh = () => {
  useEffect(() => {
    location.reload()
  }, [])
  return null
}

const e = React.createElement

const ServerOnlyRoute = ({ ...rest }) => e(Route, { component: Refresh, ...rest })

module.exports = ServerOnlyRoute
