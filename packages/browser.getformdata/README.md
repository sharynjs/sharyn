<!-- This file is auto-generated, don't modify it. Modify the JSDoc instead. -->

# 🌹 getFormData

**`getFormData`**: Gives you the fields and data of a `form` element. `getFormData` uses `FormData` and returns a plain object.

## Installation

```sh
npm i @sharyn/browser.getformdata
# or
yarn add @sharyn/browser.getformdata
```

You can alternatively install the [**@sharyn/browser**](https://github.com/sharynjs/sharyn/blob/master/packages/browser/README.md#readme) package, or the entire [**sharyn**](https://github.com/sharynjs/sharyn#getting-started) library.

## Arguments

**formElement (HTMLFormElement)**: The HTML `form` element.

**\[onlyTruthy=false\] (boolean)**: Falsy fields (like `''`) are omitted if `true`.

## Returns

**object**: The plain object of the form data.

## Example

```jsx
const Form = () => {
  const form = useRef(null)
  return (
    <>
      <form ref={form}>
        <input name="firstname" />
        <input name="lastname" />
      </form>
      <button onClick={() => console.log(getFormData(form.current))}>
        Log all form values
      </button>
      <button onClick={() => console.log(getFormData(form.current, true))}>
        Log truthy form values
      </button>
    </>
  )
}
```

If `firstname` is `Stan` and `lastname` is left empty:

```js
getFormData(form.current)       // { firstname: 'Stan', lastname: '' }
getFormData(form.current, true) // { firstname: 'Stan' }
```

## Imports

Depending on the package you are using, you can `import` or `require` `getFormData` in the following ways:

```js
import getFormData from '@sharyn/browser.getformdata'

import getFormData from '@sharyn/browser/getFormData'
import { getFormData } from '@sharyn/browser'

import getFormData from 'sharyn/browser/getFormData'
import { getFormData } from 'sharyn/browser'
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
