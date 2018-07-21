# 🌹 @sharyn/env

[![npm](https://img.shields.io/npm/v/@sharyn/env.svg)](https://www.npmjs.com/package/@sharyn/env)

This package helps accessing your environment variables.

## 🌹 Install

```bash
yarn add @sharyn/env
```

## 🌹 Usage

`@sharyn/env` reads the `.env` file, parses the `process.env` object with `rend-env` (no key transformation), and exposes its keys to make it easy to import them.

```js
import { PORT } from '@sharyn/env'

// PORT === 8000 (number, not string)
```
