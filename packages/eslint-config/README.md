# 🌹 @sharyn/eslint-config

[![npm](https://img.shields.io/npm/v/@sharyn/eslint-config.svg)](https://www.npmjs.com/package/@sharyn/eslint-config)

## 🌹 Install

Minimal:

```bash
yarn add --dev @sharyn/eslint-config eslint
```

Full-featured:

- `eslint-import-resolver-babel-module@v5.0.0-beta.0`

## 🌹 Usage

Add your `package.json`:

```json
"eslintConfig": {
  "extends": "@sharyn"
},
```

If you are not using `@sharyn/babel-preset`, remember that you also need to configure Babel to use `babel-plugin-module-resolver` for `eslint-import-resolver-babel-module` to work. A minimal setup in your `package.json` would be:

```json
  "babel": {
    "plugins": [
      ["module-resolver", {
        "root": ["./src"]
      }]
    ]
  },
```
