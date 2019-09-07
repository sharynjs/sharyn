# 🌹 ifs

`ifs` is a function that does an `if` / `else if` / `else` chain. Since it doesn't have the rigid structure of `if` and `else` statements, you can inline if anywhere in your code, including in JSX code. It's just an expression.

It is similar to using chained ternaries except that you can omit the default case, and you might prefer that formatting to chained ternaries.

If the conditions in your cases are always comparing the same value with strict equality, use [`swit`](https://github.com/sharynjs/sharyn-util/blob/master/swit.md) instead.

```js
import ifs from '@sharyn/util/ifs'
// or import { ifs } from '@sharyn/util'

ifs(
  [value < 10, 'green'],
  [value < 100, 'yellow'],
  [value < 1000, 'orange'],
  [value < 10000, 'red'],
  'black',
)
```

Use `true` as the condition to provide a default case.

## ⚠️ Warning ⚠️

Since the array we are using inside `ifs` is being **declared** there, everything inside it will be **evaluated**. This means that the following will print all 3 `console.log`s:

```js
ifs(
  [value < 10, console.log('green')],
  [value < 100, console.log('yellow')],
  [value < 1000, console.log('orange')],
)
```

If your cases have side-effects like this, you should wrap them in a `() =>` function:

```js
ifs(
  [value < 10, () => console.log('green')],
  [value < 100, () => console.log('yellow')],
  [value < 1000, () => console.log('orange')],
)
```

Same thing with React components:

```js
ifs(
  [value < 10, () => <Green />],
  [value < 100, () => <Yellow />],
  [value < 1000, () => <Orange />],
)
```

You should only omit the function when your cases are simple primitive values.

And if your conditions are complex, you should also wrap them in functions:

```js
ifs(
  [() => superHeavy(), () => <Green />],
  [() => megaHeavy(), () => <Yellow />],
  [() => ultraHeavy(), () => <Orange />],
)
```

### Default case

The default case is the last argument that is *not an array*. If you want it to return an array, please wrap it in a `() =>` function.

**`ifs`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
