# @sharyn/cli

![npm](https://img.shields.io/npm/v/@sharyn/cli.svg)

This package provides CLI tasks to use as your NPM scripts.

## Install

```bash
npx install-peerdeps -d -o -Y @sharyn/cli-peerdeps && yarn add --dev @sharyn/cli
```

## Usage

In your `package.json`, add the following scripts:

```json
  "scripts": {
    "dev-server-only": "sharyn dev-server-only",
    "babel": "sharyn babel",
    "client-build": "sharyn client-build",
    "client-watch": "sharyn client-watch",
    "lint": "sharyn lint",
    "test": "sharyn test"
  },
```
