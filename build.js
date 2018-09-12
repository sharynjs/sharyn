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
    ],
  },
  {
    name: 'cli',
    modules: ['bin.js', 'commands.js', 'shared.js'],
  },
  {
    name: 'client',
    modules: [
      'form-data.js',
      'actions.js',
      'data-reductions.js',
      'data-reductions.test.js',
      'ui-reductions.js',
      'ui-reductions.test.js',
      'async-reductions.js',
      'async-reductions.test.js',
    ],
  },
  {
    name: 'components',
    modules: [
      'DrawerItem.js',
      'Page.js',
      'HeroButton.js',
      'NavList.js',
      'Notifications.js',
      'FontWeight.js',
    ],
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
    modules: ['index.js', 'hide-on-scroll.js', 'with-initial-data.js', 'with-default.js'],
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
    name: 'server',
    modules: ['html-base.js', 'html-base.test.js', 'index.js', 'render-page.js'],
  },
  {
    name: 'shared',
    modules: [
      'graphql-call.js',
      'Switch.js',
      'fetch.js',
      'fill-title.js',
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

const build = () => {
  packages.forEach(p =>
    mySpawn(
      `./node_modules/.bin/babel packages/${p.name}/src -d packages/${
        p.name
      } --ignore test.js && flow-copy-source packages/${p.name}/src packages/${
        p.name
      } && mkdir packages/sharyn/${p.name} && ${p.modules
        .map(
          m =>
            `cp packages/${p.name}/${m} packages/sharyn/${p.name}/. && cp packages/${
              p.name
            }/${m}.flow packages/sharyn/${p.name}/.`,
        )
        .join(' && ')}`,
    ),
  )

  mySpawn('cp packages/babel-preset/*.js packages/babel-preset-sharyn/.')
  mySpawn('cp packages/eslint-config/*.js packages/eslint-config-sharyn/.')
}

const clean = () => {
  packages.forEach(p =>
    p.modules.forEach(m =>
      mySpawn(
        `./node_modules/.bin/rimraf packages/${p.name}/${m} packages/${
          p.name
        }/${m}.flow packages/sharyn/${p.name}`,
      ),
    ),
  )
  mySpawn('rimraf packages/babel-preset-sharyn/*.js')
  mySpawn('rimraf packages/eslint-config-sharyn/*.js')
}

process.argv[2] === '--clean' ? clean() : build()
