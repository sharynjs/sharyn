<!-- This file is auto-generated, don't modify it. Modify the JSDoc instead. -->

# 🌹 wait

**`wait`**: A `Promise`-based delay.

## Installation

```sh
npm i @sharyn/util.wait
# or
yarn add @sharyn/util.wait
```

You can alternatively install the [**@sharyn/util**](https://github.com/sharynjs/sharyn/blob/master/packages/util/README.md#readme) package, or the entire [**sharyn**](https://github.com/sharynjs/sharyn#getting-started) library.

## Arguments

**\[milliseconds=1000\] (number)**: The duration of the wait.

## Returns

**Promise**

## Example

```js
const main = async () => {
  console.log('Legen - wait for it...')
  await wait(3000)
  console.log('...dary!')
}

main()
```

## Imports

Depending on the package you are using, you can `import` or `require` `wait` in the following ways:

```js
// If you installed @sharyn/util.wait
import wait from '@sharyn/util.wait' // smaller size, better for client bundles

// If you installed @sharyn/util
import wait from '@sharyn/util/wait' // smaller size, better for client bundles
import { wait } from '@sharyn/util' // more convenient in Node environments

// If you installed sharyn
import wait from 'sharyn/util/wait' // smaller size, better for client bundles
import { wait } from 'sharyn/util' // more convenient in Node environments
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
