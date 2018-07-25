# 🌹 @sharyn/client

[![npm](https://img.shields.io/npm/v/@sharyn/client.svg)](https://www.npmjs.com/package/@sharyn/client)

This package provides client-side helpers.

## 🌹 Install

```bash
yarn add @sharyn/client
```

## 🌹 Usage

### getFormData

```js
import { getFormData } from '@sharyn/client/form'

const handleSubmit = e => {
  console.log(getFormData(e.target))
}

const Form = () => (
  <form onSubmit={handleSubmit}>
    <input name="foo" />
    <input type="submit" />
  </form>
)

/*
onSubmit:
  { foo: [value] }
*/

```
