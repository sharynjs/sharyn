# 🌹 @sharyn/nanoid

A [Nano ID](https://github.com/ai/nanoid) default configuration with no lookalikes (`0`, `O`, `1`, `l`, `I`), and without `-` and `_`.

To have a risk of collision similar to UUID v4 (149 billion years at 1000 IDs per hour for 1% collision risk on [Nano ID Collision Calculator](https://zelark.github.io/nano-id-cc/)), use a length of `22` (334 billion years), or `21` (44 billion years). The default length used here is `20` (6 billion years), for the only reason that it's a nicer round number, while remaining extremely collision-safe. The age of Earth being 4.5 billion years, I think we're good here.

### Installation

```sh
npm install --save @sharyn/nanoid
# or
yarn add @sharyn/nanoid
```

### Usage

```js
import id from '@sharyn/nanoid'

id() // '4wEkBX8dJmMrzoXFBgQD'
id(10) // 'uCZij3SEne'
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
