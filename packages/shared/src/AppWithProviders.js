// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
// flow-disable-next-line
import globalJss from 'jss'
import jssPreset from 'jss-preset-default'
import { hot } from 'react-hot-loader'
import JssProvider from 'react-jss/lib/JssProvider'
import { Provider } from 'react-redux'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import StaticRouter from 'react-router-dom/StaticRouter'
import nest from 'recompose/nest'
import withProps from 'recompose/withProps'
// flow-disable-next-line
import spread from '@sharyn/util/spread'
// flow-disable-next-line
import spreadIf from '@sharyn/util/spread-if'

const defaultJss = globalJss.setup(jssPreset())

const AppWithProviders = ({
  App,
  theme,
  store,
  isSsr,
  url,
  jss = defaultJss,
  routerContext,
  sheetsRegistry,
}: {
  App: Function,
  store: Object,
  theme: Object,
  jss?: Object,
  isSsr?: boolean,
  url?: string,
  routerContext?: Object,
  sheetsRegistry?: Object,
}) => {
  const NestedApp = nest(
    isSsr
      ? withProps(spread({ location: url, context: routerContext }))(StaticRouter)
      : BrowserRouter,
    withProps({
      jss,
      generateClassName: createGenerateClassName(),
      ...spread({ registry: sheetsRegistry }),
    })(JssProvider),
    withProps({ store })(Provider),
    withProps({ theme, ...spreadIf(isSsr, { sheetsManager: new Map() }) })(MuiThemeProvider),
    App,
  )
  return <NestedApp />
}

export default hot(module)(AppWithProviders)
