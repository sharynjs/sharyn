// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { renderToString } from 'react-dom/server'
// flow-disable-next-line
import { Provider as ReduxProvider } from 'react-redux'
// flow-disable-next-line
import Helmet from 'react-helmet'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
// flow-disable-next-line
import { NO_SSR } from '@sharyn/env'
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles'
import { StaticRouter } from 'react-router-dom'

import htmlBase from './html-base'

const renderPage = ({
  ctx,
  App,
  theme,
  jss,
  store,
  swPath,
}: {
  ctx: Object,
  App: Function,
  theme?: Object,
  jss?: any,
  store: Object,
  swPath?: string,
}) => {
  let appHtml
  let css
  let helmet
  const routerContext = {}
  if (!NO_SSR) {
    const sheetsRegistry = new SheetsRegistry()
    appHtml = renderToString(
      <JssProvider
        {...{ jss }}
        registry={sheetsRegistry}
        generateClassName={createGenerateClassName()}
      >
        <MuiThemeProvider {...{ theme }} sheetsManager={new Map()}>
          <ReduxProvider {...{ store }}>
            <StaticRouter location={ctx.req.url} context={routerContext}>
              <App />
            </StaticRouter>
          </ReduxProvider>
        </MuiThemeProvider>
      </JssProvider>,
    )
    css = sheetsRegistry.toString()
    helmet = Helmet.renderStatic()
  }
  if (routerContext.action === 'REPLACE') {
    ctx.redirect(routerContext.url)
  } else {
    const { data, ...rest } = store.getState()
    ctx.body = htmlBase({
      appHtml,
      css,
      helmet,
      swPath,
      windowVars: [['__PRELOADED_STATE__', { data: NO_SSR ? {} : data, ...rest }]],
    })
  }
}

export default renderPage
