# 🌹 @sharyn/testing

This package provides testing helpers.

## 🌹 Install

```bash
yarn add --dev @sharyn/testing
```

## 🌹 Usage

### sel

A short helper to target `data-test` attributes with a selector.

```js
import { sel } from '@sharyn/testing'

console.log(sel('hey')) // '[data-test="hey"]'

expect(page).toClick(sel('submit-button'))
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>@sharynjs/sharyn</b></a>.
</p>
