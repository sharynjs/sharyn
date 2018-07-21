# 🌹 Sharyn Setup Tutorial: Generic Projects

If your project is generic and not a full-stack Sharyn project (for instance you're creating some utility module), we're going to add:

```json
  "dependencies": {
    // ...
    "@babel/polyfill": "^7.0.0-beta.54", // Optional depending on your needs
    // ...
  },
  "devDependencies": {
    // ...
    "@babel/cli": "^7.0.0-beta.54", // Optional depending on your needs
    "@babel/node": "^7.0.0-beta.54", // Optional depending on your needs
    "eslint-config-airbnb-base": "^13.0.0",
    // ...
  }
```

```bash
yarn add --dev eslint-config-airbnb-base @babel/cli @babel/node
```
