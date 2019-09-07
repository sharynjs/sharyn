## 🌹 run

**`run`** lets you run some imperative code anywhere, which can be useful in declarative contexts.

It is the equivalent of a self-calling function.

For instance, let's say you have the following React component:

```jsx
const Cmp = ({ something }) => (
  <div data-something={something}></div>
)
```

If you want to execute some imperative code inside it you can do it with **`run`**:

```jsx
import run from '@sharyn/util/run'
// or import { run } from '@sharyn/util'

const Cmp = ({ something }) => (
  <div data-something={run(() => {
    console.log(something)
    doWhatever()
    return something
  })}></div>
)
```

### Multiple functions

You can pass multiple functions to **`run`**. Their results get returned as an array.

```js
run(() => 1, () => 2) // [1, 2]
```

You may want to use **`run`** if you want to execute multple functions inline without having to introduce a `{}` scope:

```jsx
const Cmp = () => (
  <input onChange={e => run(() => handleChange(e), () => updateSomething())} />
)
```

Now, whether this is a good practice or not is an other story, but at least you can.

**`run`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
