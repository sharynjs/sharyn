// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { renderToString } from 'react-dom/server'
// flow-disable-next-line
import { Provider as ReduxProvider } from 'react-redux'
// flow-disable-next-line
import { createStore } from 'redux'
// flow-disable-next-line
import Helmet from 'react-helmet'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
// flow-disable-next-line
import { NO_SSR } from '@sharyn/env'
// flow-disable-next-line
import { htmlBase } from '@sharyn/server'
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles'
import { StaticRouter } from 'react-router-dom'

const renderPage = (
  ctx: Object,
  App: Function,
  theme: Object,
  env?: Object,
  data?: Object,
  user?: Object,
) => {
  const sheetsRegistry = new SheetsRegistry()
  const routerContext = {}
  const appHtml = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={createGenerateClassName()}>
      <MuiThemeProvider {...{ theme }} sheetsManager={new Map()}>
        <ReduxProvider store={createStore(() => ({ data, user }))}>
          <StaticRouter location={ctx.req.url} context={routerContext}>
            <App />
          </StaticRouter>
        </ReduxProvider>
      </MuiThemeProvider>
    </JssProvider>,
  )
  if (routerContext.action === 'REPLACE') {
    ctx.redirect(routerContext.url)
    return null
  }

  return htmlBase({
    appHtml,
    css: sheetsRegistry.toString(),
    helmet: Helmet.renderStatic(),
    windowVars: [['__ENV__', env], ['__PRELOADED_STATE__', { data: NO_SSR ? {} : data, user }]],
  })
}

export default renderPage
