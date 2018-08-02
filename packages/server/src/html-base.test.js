// @flow

import htmlBase from './html-base'

const exampleWindowVarPairs = [
  ['__A__', { a: "<script>alert('xss')</script>" }],
  ['__B__', 'plop'],
  ['__C__', true],
  ['__D__', 666],
]

const expectedWithVars = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

  </head>
  <body>
    <div id="app"></div>
    <script>window.__A__ = {"a":"\\u003Cscript\\u003Ealert('xss')\\u003C\\u002Fscript\\u003E"}</script>
    <script>window.__B__ = "plop"</script>
    <script>window.__C__ = true</script>
    <script>window.__D__ = 666</script>
    <script src="/static/js/bundle.js"></script>
  </body>
</html>`

const expectedWithoutVars = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

  </head>
  <body>
    <div id="app"></div>

    <script src="/static/js/bundle.js"></script>
  </body>
</html>`

const expectedWithAppHtml = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

  </head>
  <body>
    <div id="app">Hello</div>

    <script src="/static/js/bundle.js"></script>
  </body>
</html>`

const expectedWithCss = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <style id="jss-ssr">body{color:red}</style>
  </head>
  <body>
    <div id="app"></div>

    <script src="/static/js/bundle.js"></script>
  </body>
</html>`

test('htmlBase', () => {
  expect(htmlBase({ windowVars: exampleWindowVarPairs })).toBe(expectedWithVars)
  expect(htmlBase({})).toBe(expectedWithoutVars)
  expect(htmlBase({ appHtml: 'Hello' })).toBe(expectedWithAppHtml)
  expect(htmlBase({ css: 'body { color: red }' })).toBe(expectedWithCss)
})
