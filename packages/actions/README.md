# 🌹 @sharyn/actions

[Flux Standard Actions](https://github.com/redux-utilities/flux-standard-action) creator functions.

### Installation

```sh
npm install --save @sharyn/actions
# or
yarn add @sharyn/actions
```

### Usage

```js
import { action, errorAction } from '@sharyn/actions'

action('hello', { name: 'Sven' }, 'nice') // { type: 'hello', payload: { name: 'Sven' }, meta: 'nice' }
errorAction('bye') // { error: true, type: 'bye' }
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
