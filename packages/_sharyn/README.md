# 🌹 The `sharyn` package

This is an umbrella package that includes the following packages:

- [**@sharyn/util**](https://github.com/sharynjs/sharyn/blob/master/packages/util/README.md#readme) – Lodash-like utils
- [**@sharyn/scripts**](https://github.com/sharynjs/sharyn/blob/master/packages/scripts/README.md#readme) – Helpers to write "NPM scripts" in a JavaScript file
- [**@sharyn/react-hooks**](https://github.com/sharynjs/sharyn/blob/master/packages/react-hooks/README.md#readme) – React Hooks
- [**@sharyn/react-router**](https://github.com/sharynjs/sharyn/blob/master/packages/react-router/README.md#readme) – Components for React Router
- [**@sharyn/browser**](https://github.com/sharynjs/sharyn/blob/master/packages/browser/README.md#readme) – Helpers for code that runs in the browser

## Installation

```sh
npm i sharyn
# or
yarn add sharyn
```

If you use `sharyn/react-hooks` or `sharyn/react-router` which are included, you will need to install `react` and `react-router` too. They are not listed as `peerDependencies` to avoid noise in projects that want to use `sharyn` without React.

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
