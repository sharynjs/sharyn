# 🌹 @sharyn/components

[![npm](https://img.shields.io/npm/v/@sharyn/components.svg)](https://www.npmjs.com/package/@sharyn/components)

This package provides components built with Material UI.

## 🌹 Install

```bash
yarn add @sharyn/components
```

## 🌹 Usage

### Page

```js
// @flow

import React from 'react'
import Page from '@sharyn/components/Page'

const MyCmp = () => <Page>Hello</Page>
// or
const MyCmp = () => <Page middle>Hello</Page>
// options
const MyCmp = () => <Page maxWidth={700} noPadding noPaper containerClass="" paperClass="">Hello</Page>


export default MyCmp
```

### DrawerItem

```js
// @flow

import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import Page from '@sharyn/components/DrawerItem'

const MyCmp = () => (
  <DrawerItem label="Hello" icon={HomeIcon} />
  <DrawerItem label="Hello without icon" />
)

export default MyCmp
```
