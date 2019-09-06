# 🌹 clearCaches

**`clearCaches`**: Clears all the [`caches`](https://developer.mozilla.org/en-US/docs/Web/API/Cache) used by service workers.

## Arguments

**\[reload=false\] (boolean)**: Reloads the page after emptying the caches.

**\[hardReload=true\] (boolean)**: If `reload` is `true`, do a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Location/reload" target="_blank">forced reload</a>.

## Returns

**void**

## Example

```jsx
const UpdateBanner = () => (
  <div>
    A new version of the app is available!
    <a onClick={() => clearCaches(true)}>Click here to update</a>
  </div>
)
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
