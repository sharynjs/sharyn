# 🌹 {{ name }}

**`{{ name }}`**: {{{ description }}}

## Installation

```sh
npm i @sharyn/{{ parentPackage }}.{{lowercaseName}}
# or
yarn add @sharyn/{{ parentPackage }}.{{lowercaseName}}
```

You can alternatively install the [**`@sharyn/{{ parentPackage }}`**](https://github.com/sharynjs/sharyn/tree/master/packages/{{ parentPackage }}) package, or the entire [**`sharyn`**](https://github.com/sharynjs/sharyn) library.

## Arguments

{{{ formattedParams }}}

## Returns

{{{ formattedReturns }}}

## Example{{examplesPlural}}

{{{ formattedExamples }}}

## Imports

Depending on the package you are using, you can `import` or `require` `{{ name }}` in the following ways:

```js
import {{ name }} from '@sharyn/{{ parentPackage }}.{{{ lowercaseName }}}'
import {{ name }} from '@sharyn/{{ parentPackage }}/{{ name }}'
import {{ name }} from 'sharyn/{{ parentPackage }}/{{ name }}'

import { {{ name }} } from '@sharyn/{{ parentPackage }}'
import { {{ name }} } from 'sharyn/{{ parentPackage }}'
import { {{ name }} } from 'sharyn'
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
