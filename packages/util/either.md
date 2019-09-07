# 🌹 either

**`either`** returns `true` if the first argument equals any of the other arguments.

Basically, you can replace this:

```js
if (something === 'foo' || something === 'bar' || something === 'baz')
// or
if (['foo', 'bar', 'baz'].includes(something))
```

By this:

```js
import either from '@sharyn/util/either'
// or import { either } from '@sharyn/util'

if (either(something, 'foo', 'bar', 'baz'))
```

`either` uses deep equality so you can test objects as well:

```js
either(obj, { a: 1 }, { a: 2 })
```

**`either`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
