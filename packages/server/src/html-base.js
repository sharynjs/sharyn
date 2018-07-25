// @flow

import serialize from 'serialize-javascript'
// @flow-disable-next-line
import { WDS_PATH } from '@sharyn/webpack-config/wds-util'

const htmlBase = (windowVarPairs: any[], rootId: string = 'app') => {
  const windowVarsScriptTags = windowVarPairs.map(
    p => `<script>window.${p[0]} = ${serialize(p[1])}</script>`,
  ).join(`
`)
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="${rootId}"></div>
    ${windowVarsScriptTags}
    <script src="${WDS_PATH}/static/js/bundle.js"></script>
</html>`
}

module.exports = htmlBase
