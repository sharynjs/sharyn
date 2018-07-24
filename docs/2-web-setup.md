# 🌹 Sharyn Tutorial – Web Setup

In the previous part, we've set up our [development environment](https://github.com/sharynjs/sharyn/blob/master/docs/1-setup-common.md). In this part, we are going to do _web stuff_.

If your project uses the entire tech stack of Sharyn, we will add:

```json
  "dependencies": {
    // +++
    "@babel/polyfill": "^7.0.0-beta.54",
    "@sharyn/cli": "^2.11.0",
    "@sharyn/db": "^1.4.2",
    "@sharyn/env": "^1.1.0",
    "@sharyn/koa": "^1.4.1",
    "@sharyn/redis": "^1.0.2",
    "koa": "^2.5.2",
    "koa-compress": "^3.0.0",
    "koa-favicon": "^2.0.1",
    "koa-mount": "^3.0.0",
    "koa-router": "^7.4.0",
    "koa-static": "^5.0.0",
    "react": "^16.4.1",
    "uuid": "^3.3.2"
    // +++
  },
  "devDependencies": {
    // +++
    "@babel/cli": "^7.0.0-beta.54",
    "@babel/node": "^7.0.0-beta.54",
    "@babel/preset-react": "^7.0.0-beta.54",
    @sharyn/cli
    "@sharyn/webpack-config": "1.3.0",
    "babel-loader": "^8.0.0-beta.4",
    "babel-plugin-flow-react-proptypes": "^24.0.1",
    "cross-env": "^5.2.0",
    "eslint-config-airbnb": "^17.0.0",
    "eslint-plugin-jsx-a11y": "^6.1.0",
    "eslint-plugin-react": "^7.10.0",
    "jest-puppeteer": "^3.2.1",
    "nodemon": "^1.18.2",
    "prop-types": "^15.6.2",
    "puppeteer": "^1.6.0",
    "react-hot-loader": "^4.3.3",
    "rimraf": "^2.6.2",
    "webpack": "^4.1.6",
    "webpack-cli": "^3.0.8",
    "webpack-dev-server": "^3.1.4"
    // +++
  }
```

```bash

```

You should also add the following to your `package.json`:

```json
  "scripts": {
    "start": "sharyn dev",
    "dev-ssr-only": "sharyn dev-ssr-only",
    "dev-no-ssr": "sharyn dev-no-ssr",
    "local-prod": "sharyn local-prod",
    "lint": "sharyn lint",
    "test": "sharyn test",
    "heroku-postbuild": "sharyn build-prod",
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

And create the following files:

- `.gitignore` containing:

```gitignore
.DS_Store
/*.log
/.env
node_modules/
/coverage/
/lib/
/dist/
/data/
```

- `Procfile` containing:

```procfile
web: node lib/_server/server.js
release: sharyn migrate-db
```

- `docker-compose.yml` containing:

```yaml
version: '3.6'
services:
  db:
    image: postgres:latest
    volumes:
      - ./data/postgres:/var/lib/postgresql/data
    ports:
      - '5432:5432'
    networks:
      - sharyn-net
  db-test:
    image: postgres:latest
    ports:
      - '5433:5432'
    networks:
      - sharyn-net
  redis:
    image: redis:latest
    volumes:
      - ./data/redis:/data
    ports:
      - '6379:6379'
    networks:
      - sharyn-net
networks:
  sharyn-net:
    name: sharyn-net
```

- `jest-puppeteer.config.js` containing:

```js
module.exports = {
  // launch: { headless: true, slowMo: 10 },
}
```

- A favicon located at `public/img/favicon.ico`

- We're going to add Flow types to Jest, and potentially other libraries in the future. In order to do this, we'll use [**flow-typed**](https://github.com/flow-typed/flow-typed). Run `yarn global add flow-typed`

- Then, `flow-typed install jest`

Phew, the entire project is now completely set up. You can finally write some code. Head over to the `src` folder of the [src](https://github.com/sharynjs/sharyn-boilerplate/tree/master/src) repository to see an example of a complete web project that uses this stack. More detailed instructions to come.
