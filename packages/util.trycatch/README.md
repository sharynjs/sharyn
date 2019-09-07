# 🌹 tryCatch

**`tryCatch`** is an inline `try` / `catch` / `finally` function, which returns the result of the `try` or `catch` case.

```js
import tryCatch from '@sharyn/util/tryCatch'
// or import { tryCatch } from '@sharyn/util'

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

**`tryCatch`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
