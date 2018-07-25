# 🌹 @sharyn/server

[![npm](https://img.shields.io/npm/v/@sharyn/server.svg)](https://www.npmjs.com/package/@sharyn/server)

This package provides server-side helpers.

## 🌹 Install

```bash
yarn add @sharyn/server
```

## 🌹 Usage

### htmlBase

```js
import { htmlBase } from '@sharyn/server'

const windowVarPairs = [
  ['__A__', { a: "<script>alert('xss')</script>" }],
  ['__B__', 'plop'],
  ['__C__', true],
  ['__D__', 666],
]

console.log(htmlBase(windowVarPairs))

/*
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="app"></div>
    <script>window.__A__ = {"a":"\\u003Cscript\\u003Ealert('xss')\\u003C\\u002Fscript\\u003E"}</script>
    <script>window.__B__ = "plop"</script>
    <script>window.__C__ = true</script>
    <script>window.__D__ = 666</script>
    <script src="/static/js/bundle.js"></script>
</html>
*/
```

#### Options

The second argument is a custom app-root ID.
