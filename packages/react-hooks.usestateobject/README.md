# 🌹 @sharyn/react-hooks.usestateobject

```jsx
import { useStateObject } from '@sharyn/react-hooks'
// or import useStateObject from '@sharyn/react-hooks/useStateObject'
// or import useStateObject from '@sharyn/react-hooks.usestateobject'

const Cmp = () => {
  const [fields, { set: setField }] = useStateObject()

  return (
    <>
      <input
        name="firstname"
        onChange={e => setField('firstname', e.target.value)}
        value={fields.firstname || ''}
      />
      <input
        name="lastname"
        onChange={e => setField('lastname', e.target.value)}
        value={fields.lastname || ''}
      />
      <button onClick={() => console.log(fields)}>Print</button>
    </>
  )
}
```

### API

**`useStateObject(initialStateObject)`**: Pass an initial object to the hook, defaults to `{}`. You can pass `null` to it.

Returns:

**[stateObject, { set, setAll, del, clear, assign, merge }]**

**`set(key, value)`**: Sets the value for the key

**`setAll(obj)`**: Replace the entire state object

**`del(key)`**: Deletes the value for the key

**`clear()`**: Resets the state object to `{}`

**`merge(obj)`**: Merge the state object deeply with an other object using Lodash's [merge](https://www.npmjs.com/package/lodash.merge).

**`assign(obj)`**: Merge the state object shallowly with an other object using `Object.assign()`.

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
