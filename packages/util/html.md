## 🌹 html

**`html`** is a template string tag that does almost nothing. It's a normal template string, but your code editor or its [plugins](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html) might support syntax highlighting for HTML when they are marked with an `html` tag. The only thing it does is to `.trim()` your string so that you can put your template string on multiple lines without getting unwanted whitespace before the doctype or after the final `html` tag.

```js
import html from '@sharyn/util/html'
// or import { html } from '@sharyn/util'

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

**`html`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
