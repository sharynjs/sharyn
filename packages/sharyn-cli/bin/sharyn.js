#! /usr/bin/env node
const { spawn } = require('child_process')

let command
const scriptName = process.argv[2]

switch (scriptName) {
  case 'lint': {
    const eslint = './node_modules/.bin/eslint src'
    const flow = './node_modules/.bin/flow'
    const madge = './node_modules/.bin/madge --circular src'
    command = [eslint, flow, madge].join(' && ')
    break
  }
  case 'babel': {
    command = './node_modules/.bin/babel src -d lib --ignore .test.js'
    break
  }
  case 'test': {
    command = './node_modules/.bin/jest --coverage'
    break
  }
  case 'clean': {
    command = './node_modules/.bin/rimraf .cache lib dist'
    break
  }
  case 'client-build': {
    command =
      './node_modules/.bin/parcel build src/_client/client.js --no-source-maps -d dist/js -o bundle.js'
    break
  }
  case 'client-watch': {
    command =
      './node_modules/.bin/parcel watch src/_client/client.js --public-url . -d dist/js -o bundle.js'
    break
  }
  default:
    // eslint-disable-next-line no-console
    console.error(`${process.argv[2]} is not a valid @sharyn/cli command.`)
    process.exit(1)
}

spawn(command, { shell: true, stdio: 'inherit' })
