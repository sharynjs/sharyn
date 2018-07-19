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

startServer(routing) // Starts server on port PORT of your env, defaulting to 8000


// Mute the output with the silent option or change the port in your tests:
setup = () => startServer(routing, { port: 6000, silent: true })
teardown = () => stopServer({ port: 6000, silent: true })
```
