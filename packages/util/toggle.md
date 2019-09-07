# 🌹 toggle

**`toggle`** toggles between two values, and defaults to the first one.

```js
import toggle from '@sharyn/util/toggle'
// or import { toggle } from '@sharyn/util'

toggle(current, 'a', 'b') // if current === 'a', returns 'b'
toggle(current, 'a', 'b') // if current === 'b', returns 'a'
toggle(current, 'a', 'b') // if current === 'x', returns 'a'
```

Deep equality is supported:

```js
cycle({ a: 1 }, { a: 1 }, { a: 2 }) // { a: 2 }
```

**`toggle`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
