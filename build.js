// @flow

import { spawnSync } from 'child_process'

const mySpawn = cmd => {
  // eslint-disable-next-line no-console
  console.log(cmd)
  spawnSync(cmd, { shell: true, stdio: 'inherit' })
}

const packages = [
  {
    name: 'babel-preset',
    modules: ['index.js'],
  },
  {
    name: 'check-setup',
    modules: [
      'app-root.js',
      'has-file.js',
      'has-package.js',
      'index.js',
      'require-cascade.js',
      'path-cascade.js',
      'path-cascade.test.js',
      'require-sharyn.js',
      'dir-checksum.js',
    ],
  },
  {
    name: 'cli',
    modules: ['bin.js', 'commands.js', 'shared.js'],
  },
  {
    name: 'client',
    modules: ['form-data.js', 'purge-cache.js'],
  },
  {
    name: 'components',
    modules: [
      'DrawerItem.js',
      'DelayedProgress.js',
      'LoadingPage.js',
      'Page.js',
      'HeroButton.js',
      'NavList.js',
      'Notifications.js',
      'FontWeight.js',
      'ProgressButton.js',
      'RefreshButton.js',
      'StoryHost.js',
      'favicons.js',
      'Switch.js',
      'Providers.js',
      'GlobalStylesProvider.js',
    ],
  },
  {
    name: 'css',
    modules: ['global.js', 'util.js'],
  },
  {
    name: 'db',
    modules: [
      'create-query.js',
      'index.js',
      'knex-config.js',
      'knex.js',
      'standard-cols.js',
      'user-id-col.js',
    ],
  },
  {
    name: 'env',
    modules: ['index.js'],
  },
  {
    name: 'eslint-config',
    modules: ['index.js'],
  },
  {
    name: 'hocs',
    modules: ['hide-on-scroll.js', 'with-client-main-query.js', 'render-if.js', 'with-fields.js'],
  },
  {
    name: 'jest-config',
    modules: ['index.js'],
  },
  {
    name: 'koa',
    modules: ['index.js'],
  },
  {
    name: 'prettier-config',
    modules: ['index.js'],
  },
  {
    name: 'redis',
    modules: ['index.js'],
  },
  {
    name: 'redux',
    modules: [
      'store.js',
      'actions.js',
      'thunks.js',
      'async-cases.js',
      'async-reducer.js',
      'async-reductions.js',
      'async-reductions.test.js',
      'data-cases.js',
      'data-reducer.js',
      'data-reductions.js',
      'data-reductions.test.js',
      'env-cases.js',
      'env-reducer.js',
      'env-reductions.js',
      'env-reductions.test.js',
      'ui-cases.js',
      'ui-reducer.js',
      'ui-reductions.js',
      'ui-reductions.test.js',
      'user-cases.js',
      'user-reducer.js',
      'user-reductions.js',
      'user-reductions.test.js',
    ],
  },
  {
    name: 'server',
    modules: [
      'html-base.js',
      'html-base.test.js',
      'index.js',
      'render-page.js',
      'base-env.js',
      'ssr-data.js',
    ],
  },
  {
    name: 'shared',
    modules: [
      'call.js',
      'graphql-call.js',
      'get-page-info.js',
      'index.js',
      'logged-filter.js',
      'find-match.js',
    ],
  },
  {
    name: 'testing',
    modules: ['index.js'],
  },
  {
    name: 'util',
    // babel --ignore test.js doesnt seem to work
    modules: [
      'index.js',
      'arr.js',
      'arr.test.js',
      'cond.js',
      'cond.test.js',
      'curry-optional.js',
      'curry-optional.test.js',
      'is-either.js',
      'is-either.test.js',
      'spread.js',
      'spread.test.js',
      'spread-if.js',
      'spread-if.test.js',
      'swit.js',
      'swit.test.js',
      'parse-object.js',
      'parse-object.test.js',
      'run.js',
      'run.test.js',
    ],
  },
  {
    name: 'webpack-config',
    modules: ['index.js', 'wds-util.js'],
  },
]

const build = () =>
  mySpawn(
    `${packages
      .map(
        p =>
          `./node_modules/.bin/babel packages/${p.name}/src -d packages/${
            p.name
          } --ignore test.js && flow-copy-source packages/${p.name}/src packages/${
            p.name
          } && mkdir packages/sharyn/${p.name} && ${p.modules
            .map(m => `cp packages/${p.name}/${m}* packages/sharyn/${p.name}/.`)
            .join(' && ')}`,
      )
      .join(
        ' && ',
      )} && cp packages/babel-preset/*.js packages/babel-preset-sharyn/. && cp packages/eslint-config/*.js packages/eslint-config-sharyn/.`,
  )

const clean = () =>
  mySpawn(
    `./node_modules/.bin/rimraf ${packages
      .map(
        p =>
          `${p.modules.map(m => `packages/${p.name}/${m}*`).join(' ')} packages/sharyn/${p.name}`,
      )
      .join(' ')} packages/babel-preset-sharyn/*.js packages/eslint-config-sharyn/*.js`,
  )

process.argv[2] === '--clean' ? clean() : build()
