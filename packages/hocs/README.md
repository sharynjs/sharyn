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

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'
import hideOnScroll from '@sharyn/hocs/hide-on-scroll'

const AutoHideAppBar = hideOnScroll(AppBar)

const App = () => (
  <AutoHideAppBar className="hide-on-scroll">
    <ToolBar>
      <Typography variant="title" color="inherit">
        Hello
      </Typography>
    </ToolBar>
  </AutoHideAppBar>
)
```
