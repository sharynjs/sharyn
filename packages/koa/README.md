# 🌹 @sharyn/koa

[![npm](https://img.shields.io/npm/v/@sharyn/koa.svg)](https://www.npmjs.com/package/@sharyn/koa)

This package provides a Koa server.

## 🌹 Install

Minimal:

```bash
yarn add @sharyn/koa koa koa-router
```

Full-featured:

```bash
yarn add @sharyn/koa koa koa-router koa-mount koa-static koa-favicon koa-compress
```

## 🌹 Usage

### `startServer, stopServer`

```js
import { startServer, stopServer } from '@sharyn/koa'

const routing = router => {
  router.get('*', ctx => {
    ctx.body = `<!doctype html>
    <html>
      <body>
        Hello world!
      </body>
    </html>`
  })
}

startServer(routing)


// Mute the output with the silent option in your tests:
setup = () => startServer(routing, { silent: true })
teardown = () => stopServer({ silent: true })
```
