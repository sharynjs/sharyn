# 🌹 defined

**`defined`** returns `true` if the passed value is not `undefined`.

```js
import defined from '@sharyn/util/defined'
// or import { defined } from '@sharyn/util'

defined(undefined) // false
defined(void 0)    // false

defined('abc') // true
defined('')    // true
defined(0)     // true
defined(null)  // true
defined([])    // true
defined({})    // true
defined(NaN)   // true
```

**`defined`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
