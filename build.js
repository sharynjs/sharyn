// @flow

import { spawn } from 'child_process'

const mySpawn = cmd => {
  // eslint-disable-next-line no-console
  console.log(cmd)
  spawn(cmd, { shell: true, stdio: 'inherit' })
}

const packages = [
  {
    name: 'babel-preset',
    modules: ['index.js'],
  },
  {
    name: 'check-setup',
    modules: ['app-root.js', 'has-file.js', 'has-package.js', 'index.js', 'require-cascade.js'],
  },
  {
    name: 'cli',
    modules: ['bin.js', 'commands.js', 'shared.js'],
  },
  {
    name: 'client',
    modules: ['form.js'],
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
    name: 'koa',
    modules: ['index.js'],
  },
  {
    name: 'material-ui',
    modules: ['DrawerItem.js'],
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
    modules: ['html-base.js', 'index.js'],
  },
  {
    name: 'shared',
    modules: ['fetch.js'],
  },
  {
    name: 'testing',
    modules: ['index.js'],
  },
  {
    name: 'util',
    modules: ['index.js', 'is-either.js', 'is-either.test.js'], // babel --ignore test.js doesnt seem to work
  },
  {
    name: 'webpack-config',
    modules: ['index.js', 'wds-util.js'],
  },
]

const build = () =>
  packages.forEach(p =>
    mySpawn(
      `./node_modules/.bin/babel packages/${p.name}/src -d packages/${p.name} --ignore test.js`,
    ),
  )

const clean = () =>
  packages.forEach(p =>
    p.modules.forEach(m => mySpawn(`./node_modules/.bin/rimraf packages/${p.name}/${m}`)),
  )

process.argv[2] === '--clean' ? clean() : build()
