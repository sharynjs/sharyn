<!-- This file is auto-generated, don't modify it. Modify the JSDoc instead. -->

# 🌹 toggle

**`toggle`**: Toggles between two values, and defaults to the first one.

## Installation

```sh
npm i @sharyn/util.toggle
# or
yarn add @sharyn/util.toggle
```

You can alternatively install the [**@sharyn/util**](https://github.com/sharynjs/sharyn/blob/master/packages/util/README.md#readme) package, or the entire [**sharyn**](https://github.com/sharynjs/sharyn#getting-started) library.

## Arguments

**currentValue (any)**: The current value.

**firstValue (any)**: The first value.

**secondValue (any)**: The second value.

## Returns

**any**: The other option.

## Example

```js
toggle(current, 'a', 'b') // if current === 'a', returns 'b'
toggle(current, 'a', 'b') // if current === 'b', returns 'a'
toggle(current, 'a', 'b') // if current === 'x', returns 'a'
```

Deep equality is supported:

```js
cycle({ a: 1 }, { a: 1 }, { a: 2 }) // { a: 2 }
```

## Imports

Depending on the package you are using, you can `import` or `require` `toggle` in the following ways:

```js
// If you installed @sharyn/util.toggle
import toggle from '@sharyn/util.toggle' // smaller size, better for client bundles

// If you installed @sharyn/util
import toggle from '@sharyn/util/toggle' // smaller size, better for client bundles
import { toggle } from '@sharyn/util' // more convenient in Node environments

// If you installed sharyn
import toggle from 'sharyn/util/toggle' // smaller size, better for client bundles
import { toggle } from 'sharyn/util' // more convenient in Node environments
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
