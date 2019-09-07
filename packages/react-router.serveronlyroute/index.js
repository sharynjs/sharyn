const React = require('react')
const { Route } = require('react-router')

const Refresh = require('@sharyn/react-router.refresh')

const e = React.createElement

const ServerOnlyRoute = ({ ...rest }) => e(Route, { component: Refresh, ...rest })

module.exports = ServerOnlyRoute
