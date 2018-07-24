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
    modules: ['has-file.js', 'has-package.js', 'index.js'],
  },
  {
    name: 'cli',
    modules: ['bin.js', 'commands.js', 'shared.js'],
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
]

const build = () =>
  packages.forEach(p =>
    mySpawn(`./node_modules/.bin/babel packages/${p.name}/src -d packages/${p.name}`),
  )

const clean = () =>
  packages.forEach(p =>
    p.modules.forEach(m => mySpawn(`./node_modules/.bin/rimraf packages/${p.name}/${m}`)),
  )

process.argv[2] === '--clean' ? clean() : build()
