<!-- This file is auto-generated, don't modify it. Modify the JSDoc instead. -->

# 🌹 swit

**`swit`**: An inline and less verbose `switch`.

## Installation

```sh
npm i @sharyn/util.swit
# or
yarn add @sharyn/util.swit
```

You can alternatively install the [**@sharyn/util**](https://github.com/sharynjs/sharyn/blob/master/packages/util/README.md#readme) package, or the entire [**sharyn**](https://github.com/sharynjs/sharyn#getting-started) library.

## Arguments

**value (any)**: The switch value.

**cases (Array.<any>)**: The cases in the form of pairs of value and result.

**defaultCase (any)**: The default case value (last parameter that is not an array).

## Returns

**any**: The matching result.

## Example

```js
const value = 2

swit(
  value,
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  'default'
)
// returns 'two'
```

## ⚠️ Warning ⚠️

The parameters passed to `swit` are evaluated before `swit` is called. This means that the following will print all 3 `console.log`s:

```js
swit(
  value,
  [1, console.log('green')],
  [2, console.log('yellow')],
  [3, console.log('orange')],
)
```

If your cases have side-effects like this (basically if they are function calls), you should wrap them in a `() =>` function:

```js
swit(
  value,
  [1, () => console.log('green')],
  [2, () => console.log('yellow')],
  [3, () => console.log('orange')],
)
```

This way they will only be evaluated in case of match.

Same thing with React components. You probably don't want them to get instanciated if you're not going to use them:

```js
swit(
  value,
  [1, () => <Green />],
  [2, () => <Yellow />],
  [3, () => <Orange />],
  () => <Default />
)
```

You should only omit the function when your cases are simple primitive values.

### Multiple value cases

You can use more than one value to compare for a given case:

```js
const value = 3

swit(
  value,
  [1, 'one'],
  [2, 3, 4 'combo'],
  [5, 'five'],
)
// returns 'combo'
```

### Default case

The default case is the last argument that is *not an array*. If you want it to return an array, please wrap it in a `() =>` function.

### Returning functions

Similarly, if you want `swit` to return functions, you will need to wrap them in a `() =>` function as well (or your function will get executed instead of returned).

## Imports

Depending on the package you are using, you can `import` or `require` `swit` in the following ways:

```js
import swit from '@sharyn/util.swit'
import swit from '@sharyn/util/swit'
import swit from 'sharyn/util/swit'

import { swit } from '@sharyn/util'
import { swit } from 'sharyn/util'
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
