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
import createSharynStore from '@sharyn/redux/store'
// flow-disable-next-line
import spread from '@sharyn/util/spread'
// flow-disable-next-line
import spreadIf from '@sharyn/util/spread-if'
import GlobalStylesProvider from './GlobalStylesProvider'

const defaultJss = globalJss.setup(jssPreset())

const Providers = ({
  children,
  App,
  theme,
  globalStyles,
  store = createSharynStore(),
  isSsr,
  url,
  jss = defaultJss,
  routerContext,
  sheetsRegistry,
}: {
  children?: any,
  App?: Function,
  store?: Object,
  theme: Object,
  globalStyles?: any,
  jss?: Object,
  isSsr?: boolean,
  url?: string,
  routerContext?: Object,
  sheetsRegistry?: Object,
}) => {
  const NestedProviders = nest(
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
    withProps({ globalStyles })(GlobalStylesProvider),
  )
  return <NestedProviders>{App ? <App /> : children}</NestedProviders>
}

export default hot(module)(Providers)