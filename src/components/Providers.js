// @flow

import React from 'react'

/* eslint-disable import/no-unresolved */
// flow-disable-next-line
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName'
/* eslint-enable import/no-unresolved */

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
// flow-disable-next-line
import globalJss from 'jss'
import jssPreset from 'jss-preset-default'
import JssProvider from 'react-jss/lib/JssProvider'
import { Provider } from 'react-redux'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import nest from 'recompose/nest'
import withProps from 'recompose/withProps'

import createSharynStore from '../redux/store'
import spread from '../util/spread'
import spreadIf from '../util/spreadIf'
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

export default Providers
