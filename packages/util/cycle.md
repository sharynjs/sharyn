# 🌹 cycle

**`cycle`** returns the next value of a set of values, and defaults to the first one.

```js
import cycle from '@sharyn/util/cycle'
// or import { cycle } from '@sharyn/util'

cycle(current, 'a', 'b', 'c') // if current === 'a', returns 'b'
cycle(current, 'a', 'b', 'c') // if current === 'b', returns 'c'
cycle(current, 'a', 'b', 'c') // if current === 'c', returns 'a'
cycle(current, 'a', 'b', 'c') // if current === 'x', returns 'a'
```

Deep equality is supported:

```js
cycle({ a: 2 }, { a: 1 }, { a: 2 }, { a: 3 }) // { a: 3 }
```

**`cycle`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
