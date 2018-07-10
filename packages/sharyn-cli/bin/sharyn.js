#! /usr/bin/env node
const { spawn } = require('child_process')

let command
const scriptName = process.argv[2]

if (scriptName === 'lint') {
  const eslint = './node_modules/.bin/eslint src'
  command = eslint
} else {
  console.error(`${process.argv[2]} is not a valid @sharyn/cli command.`)
  process.exit(1)
}

// const rimraf = './node_modules/.bin/rimraf .cache lib dist'

// const parcelBuild = './node_modules/.bin/parcel build src/_client/client.js --no-source-maps -d dist/js -o bundle.js'

// const parcelWatch = './node_modules/.bin/parcel watch src/_client/client.js --public-url . -d dist/js -o bundle.js'

// const flow = './node_modules/.bin/flow'
// const madge = './node_modules/.bin/madge --circular src'

// const commands = [eslint, flow, madge].join(' && ')

// const jest = './node_modules/.bin/jest --coverage'

spawn(command, { shell: true, stdio: 'inherit' })
