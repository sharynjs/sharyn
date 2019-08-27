<!-- markdownlint-disable no-inline-html -->
<!-- markdownlint-disable first-line-h1 -->

<div align="center">
  <img src="https://user-images.githubusercontent.com/40995577/42487947-ea40d256-840b-11e8-8acc-50e62a3226b7.png" alt="Sharyn logo">
</div>

# 🌹 Sharyn

> ⚠️ Hi :) Don't use the library yet. The documentation is not up-to-date at all.

Sharyn is a library of packages that make your life easier and reduce your boilerplate code. Its **Development** packages are useful for any project, and the **Web** ones provide a wide range of tools and helpers for your web app projects.

The default kick-ass tech stack that Sharyn supports is: **Babel 7**, **ESLint 5**, **Flow**, **Prettier**, **Jest**, **React with server-side rendering**, **Redux**, **Webpack with HMR**, **Material UI**, **Koa**, **GraphQL with Apollo**, **Knex**, **PostgreSQL**, **Redis**, **E2E tests with Puppeteer**, **Docker**, and **Heroku**. These bricks are all optional and replaceable.

Sharyn will work wonders for projects that follow the upcoming [major update](https://github.com/verekia/js-stack-from-scratch/issues/255) of my [**JS Stack from Scratch**](https://github.com/verekia/js-stack-from-scratch) tutorial.

## 🌹 Packages

### Development

- ✅ [**@sharyn/scripts**](https://github.com/sharynjs/sharyn-scripts) – Helpers to write scripts in a JavaScript file
- ✅ [**babel-preset-sharyn**](https://github.com/sharynjs/babel-preset-sharyn) – A default Babel preset
- ✅ [**eslint-config-sharyn**](https://github.com/sharynjs/eslint-config-sharyn) – A default ESLint configuration
- ✅ [**@sharyn/prettier-config**](https://github.com/sharynjs/prettier-config-sharyn) – Prettier configuration
- [**@sharyn/jest-config**](https://github.com/sharynjs/sharyn/blob/master/packages/jest-config/README.md) – Jest configuration
- ✅ [**@sharyn/util**](https://github.com/sharynjs/sharyn-util) – Lodash-like utils

### Web

- ✅ [**@sharyn/env**](https://github.com/sharynjs/sharyn-env) – Convenient access to env variables
- 🛑 [**@sharyn/cli**](https://github.com/sharynjs/sharyn/blob/master/packages/cli/README.md) – Convenient NPM scripts
- 🛑 [**@sharyn/webpack-config**](https://github.com/sharynjs/sharyn/blob/master/packages/webpack-config/README.md) – Webpack configuration
- [**@sharyn/client**](https://github.com/sharynjs/sharyn/blob/master/packages/client/README.md) – Client-side helpers
- [**@sharyn/shared**](https://github.com/sharynjs/sharyn/blob/master/packages/shared/README.md) – Helpers that can be used by both the client and the server
- [**@sharyn/server**](https://github.com/sharynjs/sharyn/blob/master/packages/server/README.md) – Server-side helpers
- 🛑 [**@sharyn/koa**](https://github.com/sharynjs/sharyn/blob/master/packages/koa/README.md) – A preconfigured Koa server
- [**@sharyn/db**](https://github.com/sharynjs/sharyn/blob/master/packages/db/README.md) – Knex configuration and database utils
- [**@sharyn/redis**](https://github.com/sharynjs/sharyn/blob/master/packages/redis/README.md) – Redis setup
- [**@sharyn/testing**](https://github.com/sharynjs/sharyn/blob/master/packages/testing/README.md) – Testing helpers
- [**@sharyn/components**](https://github.com/sharynjs/sharyn/blob/master/packages/components/README.md) – UI components using Material UI
- 🛑 [**@sharyn/hocs**](https://github.com/sharynjs/sharyn/blob/master/packages/hocs/README.md) – React High-Order Components
- [**@sharyn/css**](https://github.com/sharynjs/sharyn/blob/master/packages/css/README.md) – Styles
- [**@sharyn/redux**](https://github.com/sharynjs/sharyn/blob/master/packages/redux/README.md) – Redux helpers

## 🌹 Getting Started

To get started, follow the [**setup tutorial**](https://github.com/sharynjs/sharyn/blob/master/docs/1-development-setup.md) or download the [**sharyn-boilerplate**](https://github.com/sharynjs/sharyn-boilerplate) project.

I recommend the tutorial the first time you use Sharyn, and the boilerplate once you're familiar with the stack.

## 🌹 Structuring Factor

Every module is tagged with a _structuring factor_, which represents how easily it can be integrated into an existing codebase. In general, the more structuring and opinionated the modules are, the more they will reduce your boilerplate code, at the cost of flexibility.

> 🌲 **Not structuring** – You can use this module in any codebase, it is a very simple unit.
>
> 🏠 **Moderately structuring** – This module has some degree of flexibility, but it serves a more specific purpose than non-structuring ones, so if your need is slightly different, it might be difficult to use it.
>
> 🏢 **Very structuring** – This module is not flexible. It does what it does well, but you have to comply to its purpose or you won't be able to take advantage of it. These are kind of imposing a _framework_, which is demonstrated by [**sharyn-boilerplate**](https://github.com/sharynjs/sharyn-boilerplate). If these work for your case, that's a big win!

## 🌹 Credits

By Jonathan Verrecchia – [**@verekia**](https://github.com/verekia)

Rose design by [**tiaesther**](https://pngtree.com/tiaesther_4360?type=1)

<!-- markdownlint-disable no-trailing-punctuation -->

## 🌹 Why _Sharyn_?

It's a reference to one of my favorite metalcore songs, [**Rose of Sharyn**](https://www.youtube.com/watch?v=PgMsACFMIq8) by Killswitch Engage.

## 🌹 License

MIT
