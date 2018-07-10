#! /usr/bin/env node
const { spawn } = require('child_process')

let command
const scriptName = process.argv[2]

if (scriptName === 'lint') {
  const eslint = './node_modules/.bin/eslint src'
  const flow = './node_modules/.bin/flow'
  const madge = './node_modules/.bin/madge --circular src'
  command = [eslint, flow, madge].join(' && ')
} else if (scriptName === 'test') {
  const jest = './node_modules/.bin/jest --coverage'
  command = jest
} else if (scriptName === 'clean') {
  const rimraf = './node_modules/.bin/rimraf .cache lib dist'
  command = rimraf
} else if (scriptName === 'client-build') {
  const parcelBuild =
    './node_modules/.bin/parcel build src/_client/client.js --no-source-maps -d dist/js -o bundle.js'
  command = parcelBuild
} else if (scriptName === 'client-watch') {
  const parcelWatch =
    './node_modules/.bin/parcel watch src/_client/client.js --public-url . -d dist/js -o bundle.js'
  command = parcelWatch
} else {
  // eslint-disable-next-line no-console
  console.error(`${process.argv[2]} is not a valid @sharyn/cli command.`)
  process.exit(1)
}

spawn(command, { shell: true, stdio: 'inherit' })
