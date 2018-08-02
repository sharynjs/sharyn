// @flow

import serialize from 'serialize-javascript'
// @flow-disable-next-line
import { WDS_PATH } from '@sharyn/webpack-config/wds-util'
// @flow-disable-next-line
import { hasPackage } from '@sharyn/check-setup'
import CleanCSS from 'clean-css'

const robotoLink = `
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />`

type Params = { windowVars?: any[], rootId?: string, appHtml?: string, css?: string }

const htmlBase = ({ windowVars: windowVarPairs, rootId = 'app', appHtml = '', css }: Params) => {
  const windowVarsScriptTags = windowVarPairs
    ? windowVarPairs.map(p => `    <script>window.${p[0]} = ${serialize(p[1])}</script>`).join(`
`)
    : ''
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">${hasPackage('@material-ui/core') ? robotoLink : ''}
${css ? `    <style id="jss-ssr">${new CleanCSS().minify(css).styles}</style>` : ''}
  </head>
  <body>
    <div id="${rootId}">${appHtml}</div>
${windowVarsScriptTags}
    <script src="${WDS_PATH}/static/js/bundle.js"></script>
  </body>
</html>`
}

module.exports = htmlBase
