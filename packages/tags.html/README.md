## 🌹 html

**`html`** is a template string tag that does **nothing**. It's a normal template string, but your code editor or its plugins ([lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html) or [es6-string-html](https://marketplace.visualstudio.com/items?itemName=hjb2012.vscode-es6-string-html) for VSCode) might support syntax highlighting for HTML when they are marked with an `html` tag.

```js
const createHtml = ({ title }: { title: string }) =>
  html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
      </head>
      <body>
        <h1>${title}</h1>
      </body>
    </html>
  ` // This HTML code has syntax highlighting
```
