<!-- This file is auto-generated, don't modify it. Modify the JSDoc instead. -->

# 🌹 tryCatch

**`tryCatch`**: An inline `try` / `catch` / `finally` function, which returns the result of the `try` or `catch` case.

## Installation

```sh
npm i @sharyn/util.trycatch
# or
yarn add @sharyn/util.trycatch
```

You can alternatively install the [**@sharyn/util**](https://github.com/sharynjs/sharyn/blob/master/packages/util/README.md#readme) package, or the entire [**sharyn**](https://github.com/sharynjs/sharyn#getting-started) library.

## Arguments

**tryFn (function)**: The `try` instructions in a function.

**\[catchFn\] (function)**: The `catch` instructions in a function. Called with the error.

**\[finallyFn\] (function)**: The `finally` instructions in a function.

## Returns

**any**: What your `tryFn` or `catchFn` functions return.

## Example

```js
tryCatch(() => success()) // some result
tryCatch(() => failure()) // undefined
tryCatch(() => failure(), err => err) // the error
tryCatch(() => failure(), () => {}) // undefined
tryCatch(() => whatever(), () => {}, () => cleanup())
```

Is is particularly useful to avoid this pattern of assigning a variable inside the `try` block:

```js
let result
try {
  result = somethingRisky()
} catch (e) {
  handleError(e)
}
```

Which can be replaced by one line:

```js
const result = tryCatch(() => somethingRisky(), e => handleError(e))
```

Please note that `tryCatch` may affect the linting or type-checking of that code compared to using a real `try` / `catch` block.

## Imports

Depending on the package you are using, you can `import` or `require` `tryCatch` in the following ways:

```js
// If you installed @sharyn/util.trycatch
import tryCatch from '@sharyn/util.trycatch' // smaller import size (better for client bundles)

// If you installed @sharyn/util
import tryCatch from '@sharyn/util/tryCatch' // smaller import size (better for client bundles)
import { tryCatch } from '@sharyn/util' // more convenient (nicer for Node environments)

// If you installed sharyn
import tryCatch from 'sharyn/util/tryCatch' // smaller import size (better for client bundles)
import { tryCatch } from 'sharyn/util' // more convenient (nicer for Node environments)
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
