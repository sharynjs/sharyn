# 🌹 getFormFields

**`getFormFields`**: Gives you the fields of a `form` element. `getFormFields` uses `FormData` and returns a plain object.

## Installation

```sh
npm i @sharyn/browser.getformfields
# or
yarn add @sharyn/browser.getformfields
```

You can alternatively install the [**`@sharyn/browser`**](https://github.com/sharynjs/sharyn/tree/master/packages/browser) package, or the entire [**`sharyn`**](https://github.com/sharynjs/sharyn) library.

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
      <button onClick={() => console.log(getFormFields(form.current))}>
        Log all form values
      </button>
      <button onClick={() => console.log(getFormFields(form.current, true))}>
        Log truthy form values
      </button>
    </>
  )
}
```

If `firstname` is `Stan` and `lastname` is left empty:

```js
getFormFields(form.current)       // { firstname: 'Stan', lastname: '' }
getFormFields(form.current, true) // { firstname: 'Stan' }
```

## Imports

Depending on the package you are using, you can `import` or `require` `getFormFields` in the following ways:

```js
import getFormFields from '@sharyn/browser.getformfields'
import getFormFields from '@sharyn/browser/getFormFields'
import getFormFields from 'sharyn/browser/getFormFields'

import { getFormFields } from '@sharyn/browser'
import { getFormFields } from 'sharyn/browser'
import { getFormFields } from 'sharyn'
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
