<p align="center">
  <img src="https://user-images.githubusercontent.com/40995577/42487947-ea40d256-840b-11e8-8acc-50e62a3226b7.png">
</p>

# Sharyn

Sharyn in a collection of helpers to build a JS app. At the moment, this is pretty much a personal library for my own projects, and for projects that strictly follow my [JS Stack from Scratch](https://github.com/verekia/js-stack-from-scratch) tutorial ([major update](https://github.com/verekia/js-stack-from-scratch/issues/255) coming soon).

The following packages are available:

- **[@sharyn/cli](https://github.com/sharynjs/sharyn/blob/master/packages/cli/README.md)** – Convenient NPM scripts
- **[@sharyn/babel-preset](https://github.com/sharynjs/sharyn/blob/master/packages/babel-preset/README.md)** – Babel preset
- **[@sharyn/eslint-config](https://github.com/sharynjs/sharyn/blob/master/packages/eslint-config/README.md)** – ESLint configuration
- **[@sharyn/prettier-config](https://github.com/sharynjs/sharyn/blob/master/packages/prettier-config/README.md)** – Prettier configuration
- **[@sharyn/env](https://github.com/sharynjs/sharyn/blob/master/packages/env/README.md)** – Env util
- **[@sharyn/material-ui](https://github.com/sharynjs/sharyn/blob/master/packages/material-ui/README.md)** – UI components using Material UI
- **[@sharyn/shared](https://github.com/sharynjs/sharyn/blob/master/packages/shared/README.md)** – Utils shared between the client and the server

## Bootstrapping a project

Here is a command that combines the installation of `@sharyn/cli`, `@sharyn/babel-preset`, `@sharyn/eslint-config`, `@sharyn/prettier-config`, and their peer dependencies.

```bash
npx install-peerdeps -o -Y @sharyn/cli-peer-deps && npx install-peerdeps -o -Y -d @sharyn/cli-peer-devdeps && npx install-peerdeps -d -Y @sharyn/babel-preset && npx install-peerdeps -d -Y @sharyn/eslint-config && npx install-peerdeps -d -Y @sharyn/prettier-config && yarn add --dev @sharyn/cli
```

Then, add this to your `package.json`:

```json
  "scripts": {
    "start": "sharyn dev",
    "dev-ssr-only": "sharyn dev-ssr-only",
    "dev-no-ssr": "sharyn dev-no-ssr",
    "prod-local": "sharyn prod-local",
    "lint": "sharyn lint",
    "test": "sharyn test",
    "heroku-postbuild": "sharyn prod-build",
    "precommit": "sharyn lint-test"
  },
  "babel": {
    "presets": [
      "@sharyn"
    ]
  },
  "eslintConfig": {
    "extends": "@sharyn"
  },
```

Create a `.prettierrc.js` file at the root of your project containing:

```js
module.exports = require('@sharyn/prettier-config')
```

Create a `.flowconfig` file at the root of your project containing:

```
[options]
suppress_comment= \\(.\\|\n\\)*\\flow-disable-next-line

module.system.node.resolve_dirname=node_modules
module.system.node.resolve_dirname=src

[ignore]
.*/node_modules/config-chain/.*
.*/node_modules/graphviz/.*
```

Create a `webpack.config.js` file at the root of your project containing:

```js
module.exports = {
  entry: './src/_client/client.js',
  output: { filename: 'js/bundle.js' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
}
```

To use Heroku, create a `Procfile` file at the root of your project containing:

```
web: node lib/_server/server.js
release: sharyn migrate-db
```

## Credits

By Jonathan Verrecchia – [@verekia](https://github.com/verekia)

Rose design by [tiaesther](https://pngtree.com/tiaesther_4360?type=1)

## Why 'Sharyn'?

It's a reference to one of my favorite metalcore songs, [Rose of Sharyn](https://www.youtube.com/watch?v=PgMsACFMIq8) by Killswitch Engage.

## License

MIT
