// @flow

import htmlBase from './htmlBase'

const exampleWindowVarPairs = [
  ['__A__', { a: "<script>alert('xss')</script>" }],
  ['__B__', 'plop'],
  ['__C__', true],
  ['__D__', 666],
]

const expectedWithVars = `<!doctype html>
<html >
  <head>
    <meta charset="utf-8">



    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

  </head>
  <body >
    <div id="app"></div>

    <script>window.__A__ = {"a":"\\u003Cscript\\u003Ealert('xss')\\u003C\\u002Fscript\\u003E"}</script>
    <script>window.__B__ = "plop"</script>
    <script>window.__C__ = true</script>
    <script>window.__D__ = 666</script>
    <script src="/static/js/bundle.js"></script>
  </body>
</html>`

const expectedWithSwPath = `<!doctype html>
<html >
  <head>
    <meta charset="utf-8">



    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

  </head>
  <body >
    <div id="app"></div>
    <script>navigator.serviceWorker && window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'))</script>

    <script src="/static/js/bundle.js"></script>
  </body>
</html>`

const expectedWithoutVars = `<!doctype html>
<html >
  <head>
    <meta charset="utf-8">



    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

  </head>
  <body >
    <div id="app"></div>


    <script src="/static/js/bundle.js"></script>
  </body>
</html>`

const expectedWithAppHtml = `<!doctype html>
<html >
  <head>
    <meta charset="utf-8">



    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

  </head>
  <body >
    <div id="app">Hello</div>


    <script src="/static/js/bundle.js"></script>
  </body>
</html>`

const expectedWithCss = `<!doctype html>
<html >
  <head>
    <meta charset="utf-8">



    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <style id="jss-ssr">body{color:red}</style>
  </head>
  <body >
    <div id="app"></div>


    <script src="/static/js/bundle.js"></script>
  </body>
</html>`

const expectedWithHelmet = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
<title>hello</title>
<meta />
<link />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

  </head>
  <body foo="foo">
    <div id="app"></div>


    <script src="/static/js/bundle.js"></script>
  </body>
</html>`

test('htmlBase', () => {
  expect(htmlBase({ windowVars: exampleWindowVarPairs })).toBe(expectedWithVars)
  expect(htmlBase({})).toBe(expectedWithoutVars)
  expect(htmlBase({ swPath: '/sw.js' })).toBe(expectedWithSwPath)
  expect(htmlBase({ appHtml: 'Hello' })).toBe(expectedWithAppHtml)
  expect(htmlBase({ css: 'body { color: red }' })).toBe(expectedWithCss)
  expect(
    htmlBase({
      helmet: {
        htmlAttributes: { toString: () => 'lang="en"' },
        bodyAttributes: { toString: () => 'foo="foo"' },
        title: { toString: () => '<title>hello</title>' },
        meta: { toString: () => '<meta />' },
        link: { toString: () => '<link />' },
      },
    }),
  ).toBe(expectedWithHelmet)
})
