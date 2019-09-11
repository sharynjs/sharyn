## 🌹 invoke

**`invoke`** lets you run some imperative code anywhere, which can be useful in declarative contexts.

It is the equivalent of a self-calling function.

For instance, let's say you have the following React component:

```jsx
const Cmp = ({ something }) => (
  <div data-something={something}></div>
)
```

If you want to execute some imperative code inside it you can do it with **`invoke`**:

```jsx
const Cmp = ({ something }) => (
  <div data-something={invoke(() => {
    console.log(something)
    doWhatever()
    return something
  })}></div>
)
```

### Multiple functions

You can pass multiple functions to **`invoke`**. Their results get returned as an array.

```js
invoke(() => 1, () => 2) // [1, 2]
```

You may want to use **`invoke`** if you want to execute multple functions inline without having to introduce a `{}` scope:

```jsx
const Cmp = () => (
  <input onChange={e => invoke(() => handleChange(e), () => updateSomething())} />
)
```

Now, whether this is a good practice or not is an other story, but at least you can.

**`invoke`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
