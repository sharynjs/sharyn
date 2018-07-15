# @sharyn/general

![npm](https://img.shields.io/npm/v/@sharyn/general.svg)

This package provides helpers that can be used in any JS file of your projet.

## Install

```bash
yarn add @sharyn/general
```

## Usage

### `env`

Reads the `.env` file, parses the `process.env` object with `rend-env` (no key transformation), and exposes its keys to make it easy to import them.

```js
import { PORT, isProd } from '@sharyn/general/env'
```
