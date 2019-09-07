## 🌹 global

**`global`** is a set of functions to create and access global variables. Note that you cannot import the whole module as `global` since this is a reserved keyword. Simply import the functions directly or import it as some other name like `glob`. For convenience, these functions are both availble from the `@sharyn/util/global` module, and from the `@sharyn/util` module directly.

The global variables are stored in a simple object (`{}`):

```js
import { getGlobal, setGlobal, getAllGlobal, deleteGlobal, clearGlobal } from '@sharyn/util'
// or import { getGlobal, setGlobal, getAllGlobal, deleteGlobal, clearGlobal } from '@sharyn/util/global'

getAllGlobal() // {}

setGlobal('a', 1)
setGlobal('b', 2)

getAllGlobal() // { a: 1, b: 2 }

getGlobal('a') // 1

deleteGlobal('b')

getAllGlobal() // { a: 1 }

clearGlobal()

getAllGlobal() // {}
```

Of course global variables are a last resort, and more contained solutions are usually preferred, but in some situations it can be useful.

You can for instance set a Redux store as global in the file it is created:

```js
const store = createStore(...)
setGlobal('store', store)
```

And use it anywhere in your application, outside of React components for instance.

```js
getGlobal('store').getState()
```

**`global`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
