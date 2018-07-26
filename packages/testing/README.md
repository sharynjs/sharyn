# 🌹 @sharyn/testing

[![npm](https://img.shields.io/npm/v/@sharyn/testing.svg)](https://www.npmjs.com/package/@sharyn/testing)

This package provides testing helpers.

## 🌹 Install

```bash
yarn add @sharyn/testing
```

## 🌹 Usage

### sel

A short helper to target `data-test` attributes with a selector.

```js
import { sel } from '@sharyn/testing'

console.log(sel('hey')) // '[data-test="hey"]'
```
