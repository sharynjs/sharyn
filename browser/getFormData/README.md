# 🌹 getFormData

**`getFormData(formElement, onlyTruthy=false)`**: Gives you the `FormData` of a `form` element.

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

## Arguments

**formElement (HTMLFormElement)**: The HTML `form` element.
**[onlyTruthy=false] (boolean)**: Falsy fields (like `''`) are omitted if `true`.
