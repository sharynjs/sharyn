# 🌹 between

**`between`** tests if a numeral value is between two bounds.

So instead of writing this:

```js
const x = 50
if (x >= 10 && x <= 100)
```

You can now use:

```js
if (between(x, 10, 100))
```

The bounds are compared inclusively by default. For an exclusive comparison, use the last parameter, which can be `exclude`, `exclude-lower`, or `exclude-upper`.

```js
import between from '@sharyn/util/between'
// or import { between } from '@sharyn/util'

const x = 50
between(x, 10, 100) // true

between(10, 10, 100) // true
between(100, 10, 100) // true

between(10, 10, 100, 'exclude-lower') // false
between(100, 10, 100, 'exclude-upper') // false

between(10, 10, 100, 'exclude') // false
between(100, 10, 100, 'exclude') // false
```

