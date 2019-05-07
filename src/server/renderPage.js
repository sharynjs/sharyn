// @flow

import React from 'react'

import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'
import { SheetsRegistry } from 'react-jss/lib/jss'

import DefaultProviders from '../components/Providers'
import { NO_SSR } from '../env'

import htmlBase from './htmlBase'

const renderPage = ({
  Providers = DefaultProviders,
  App,
  theme,
  store,
  url,
  globalStyles,
  swPath,
}: {
  Providers?: Function,
  App: Function,
  theme: Object,
  store: Object,
  url: string,
  globalStyles?: any,
  swPath?: string,
}) => {
  let appHtml
  let css
  let helmet
  const routerContext = {}
  if (!NO_SSR) {
    const sheetsRegistry = new SheetsRegistry()
    appHtml = renderToString(
      <Providers {...{ theme, store, url, globalStyles, routerContext, sheetsRegistry }} isSsr>
        <App />
      </Providers>,
    )
    css = sheetsRegistry.toString()
    helmet = Helmet.renderStatic()
  }
  return {
    routerContext,
    html: htmlBase({
      appHtml,
      css,
      helmet,
      swPath,
      windowVars: [['__PRELOADED_STATE__', store.getState()]],
    }),
  }
}

export default renderPage
