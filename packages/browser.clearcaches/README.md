<!-- This file is auto-generated, don't modify it. Modify the JSDoc instead. -->

# 🌹 clearCaches

**`clearCaches`**: Clears all the [`caches`](https://developer.mozilla.org/en-US/docs/Web/API/Cache) used by service workers.

## Installation

```sh
npm i @sharyn/browser.clearcaches
# or
yarn add @sharyn/browser.clearcaches
```

You can alternatively install the [**`@sharyn/browser`**](https://github.com/sharynjs/sharyn/blob/master/packages/browser/README.md#readme) package, or the entire [**`sharyn`**](https://github.com/sharynjs/sharyn) library.

## Arguments

**\[reload=false\] (boolean)**: Reloads the page after emptying the caches.

**\[hardReload=true\] (boolean)**: If `reload` is `true`, do a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Location/reload" target="_blank">forced reload</a>.

## Returns

**Promise**

## Example

```jsx
const UpdateBanner = () => (
  <div>
    A new version of the app is available!
    <a onClick={() => clearCaches(true)}>Click here to update</a>
  </div>
)
```

## Imports

Depending on the package you are using, you can `import` or `require` `clearCaches` in the following ways:

```js
import clearCaches from '@sharyn/browser.clearcaches'
import clearCaches from '@sharyn/browser/clearCaches'
import clearCaches from 'sharyn/browser/clearCaches'

import { clearCaches } from '@sharyn/browser'
import { clearCaches } from 'sharyn/browser'
import { clearCaches } from 'sharyn'
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
