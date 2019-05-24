// @flow

/* eslint-disable import/no-extraneous-dependencies */

import serialize from 'serialize-javascript'
// @flow-disable-next-line
import { WDS_PATH } from '@sharyn/webpack-config/wds-util'
// @flow-disable-next-line
import { NO_SSR, SSR_ONLY } from '@sharyn/env'
// @flow-disable-next-line
import { hasPackage } from '@sharyn/check-setup'
import CleanCSS from 'clean-css'

const robotoLink = `    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />`

type Params = {
  windowVars?: any[],
  rootId?: string,
  appHtml?: string,
  css?: string,
  helmet?: Object,
  swPath?: string,
}

const htmlBase = ({
  windowVars: windowVarPairs,
  rootId = 'app',
  appHtml = '',
  css,
  helmet,
  swPath,
}: Params) => {
  const windowVarsScriptTags = windowVarPairs
    ? windowVarPairs.map(p => `    <script>window.${p[0]} = ${serialize(p[1])}</script>`).join(`
`)
    : ''
  return `<!doctype html>
<html ${!NO_SSR && helmet ? helmet.htmlAttributes.toString() : ''}>
  <head>
    <meta charset="utf-8">
${!NO_SSR && helmet ? helmet.title.toString() : ''}
${!NO_SSR && helmet ? helmet.meta.toString() : ''}
${!NO_SSR && helmet ? helmet.link.toString() : ''}
${hasPackage('@material-ui/core') ? robotoLink : ''}
${!NO_SSR && css ? `    <style id="jss-ssr">${new CleanCSS().minify(css).styles}</style>` : ''}
  </head>
  <body ${!NO_SSR && helmet ? helmet.bodyAttributes.toString() : ''}>
    <div id="${rootId}">${NO_SSR ? '' : appHtml}</div>
${
  swPath
    ? `    <script>navigator.serviceWorker && window.addEventListener('load', () => navigator.serviceWorker.register('${swPath}'))</script>`
    : ''
}
${SSR_ONLY ? '' : windowVarsScriptTags}
${SSR_ONLY ? '' : `    <script src="${WDS_PATH}/static/js/bundle.js"></script>`}
  </body>
</html>`
}

module.exports = htmlBase
