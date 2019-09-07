## 🌹 exists

**`exists`** returns `true` if its argument is not `null` or `undefined`.

```js
import exists from '@sharyn/util/exists'
// or import { exists } from '@sharyn/util'

exists('a')  // true
exists('')   // true
exists(0)    // true
exists(NaN)  // true

exists(null)      // false
exists(undefined) // false
exists(void 0)    // false
```

**`exists`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
