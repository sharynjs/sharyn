// @flow

import serialize from 'serialize-javascript'
// @flow-disable-next-line
import { WDS_PATH } from '@sharyn/webpack-config/wds-util'
// @flow-disable-next-line
import { hasPackage } from '@sharyn/check-setup'

const robotoLink = `
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />`

const htmlBase = (windowVarPairs?: any[], rootId: string = 'app') => {
  const windowVarsScriptTags = windowVarPairs
    ? windowVarPairs.map(p => `    <script>window.${p[0]} = ${serialize(p[1])}</script>`).join(`
`)
    : ''
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">${hasPackage('@material-ui/core') ? robotoLink : ''}
  </head>
  <body>
    <div id="${rootId}"></div>
${windowVarsScriptTags}
    <script src="${WDS_PATH}/static/js/bundle.js"></script>
  </body>
</html>`
}

module.exports = htmlBase
