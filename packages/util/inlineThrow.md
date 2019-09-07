## 🌹 inlineThrow

**`inlineThrow`** is a function that `throw`s its argument. Unlike a regular `throw`, it's an expression and can be used anywhere.

```js
const number = isNan(string) ? inlineThrow(Error('Not a number')) : parseInt(string)
```

**`inlineThrow`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
