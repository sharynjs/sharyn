# @sharyn/cli

![npm (scoped)](https://img.shields.io/npm/v/@sharyn/cli.svg)

This package provides CLI tasks to use as your NPM scripts.

## Install

```bash
npx install-peerdeps -Y --dev @sharyn/cli
```

(the `-Y` option is to use Yarn)

## Usage

In your `package.json`, add the following scripts:

```json
  "scripts": {
    "babel": "sharyn babel",
    "client-build": "sharyn client-build",
    "client-watch": "sharyn client-watch",
    "lint": "sharyn lint",
    "test": "sharyn test"
  },
```
