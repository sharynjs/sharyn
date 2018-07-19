# 🌹 @sharyn/koa

[![npm](https://img.shields.io/npm/v/@sharyn/koa.svg)](https://www.npmjs.com/package/@sharyn/koa)

This package provides a Koa server.

## 🌹 Install

Minimal:

```bash
yarn add @sharyn/koa koa
```

Full-featured:

```bash
yarn add @sharyn/koa koa koa-mount koa-static koa-favicon
```

## 🌹 Usage

### `startServer, stopServer`

```js
import { startServer, stopServer } from '@sharyn/koa'

startServer()
// or
startServer({ silent: true })

// To programatically stop the server (like in tests teardown):
stopServer()
stopServer({ silent: true })
```
