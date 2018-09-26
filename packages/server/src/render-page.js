// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

import { renderToString } from 'react-dom/server'
// flow-disable-next-line
import Helmet from 'react-helmet'
import { SheetsRegistry } from 'react-jss/lib/jss'
// flow-disable-next-line
import { NO_SSR } from '@sharyn/env'
// flow-disable-next-line
import DefaultAppWithProviders from '@sharyn/shared/AppWithProviders'

import htmlBase from './html-base'

const renderPage = (
  ctx: Object,
  {
    AppWithProviders = DefaultAppWithProviders,
    App,
    theme,
    store,
    swPath,
  }: {
    AppWithProviders?: Function,
    App: Function,
    theme: Object,
    store: Object,
    swPath?: string,
  },
) => {
  let appHtml
  let css
  let helmet
  const routerContext = {}
  if (!NO_SSR) {
    const sheetsRegistry = new SheetsRegistry()
    appHtml = renderToString(
      <AppWithProviders
        url={ctx.req.url}
        {...{ App, theme, store, routerContext, sheetsRegistry }}
        isSsr
      />,
    )
    css = sheetsRegistry.toString()
    helmet = Helmet.renderStatic()
  }
  if (routerContext.action === 'REPLACE') {
    ctx.redirect(routerContext.url)
  } else {
    ctx.body = htmlBase({
      appHtml,
      css,
      helmet,
      swPath,
      windowVars: [['__PRELOADED_STATE__', store.getState()]],
    })
  }
}

export default renderPage
