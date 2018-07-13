# @sharyn/cli

![npm](https://img.shields.io/npm/v/@sharyn/cli.svg)

This package provides CLI tasks to use as your NPM scripts.

## Install

```bash
npx install-peerdeps -o -Y @sharyn/cli-peer-deps && npx install-peerdeps -o -Y -d @sharyn/cli-peer-devdeps && yarn add --dev @sharyn/cli
```

## Usage

In your `package.json`, add the following scripts:

```json
  "scripts": {
    "start": "sharyn dev",
    "dev-server-only": "sharyn dev-server-only",
    "dev-client-only": "sharyn dev-client-only",
    "prod-build": "sharyn prod-build",
    "lint": "sharyn lint",
    "test": "sharyn test"
  },
```
