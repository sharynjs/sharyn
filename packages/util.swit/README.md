## 🌹 swit

**`swit`** is an inline and less verbose `switch`.

```js
import swit from '@sharyn/util/swit'
// or import { swit } from '@sharyn/util'

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

**`swit`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
