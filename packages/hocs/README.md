# 🌹 @sharyn/hocs

[![npm](https://img.shields.io/npm/v/@sharyn/hocs.svg)](https://www.npmjs.com/package/@sharyn/hocs)

This package provides React High-Order Components.

## 🌹 Install

```bash
yarn add @sharyn/hocs
```

## 🌹 Usage

### hideOnScroll

```js
import React from 'react'

const AppBar = () => <div>AppBar</div>

const AutoHideAppBar = hideOnScroll(AppBar)
```
