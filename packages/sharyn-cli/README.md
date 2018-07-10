# @sharyn/cli

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
