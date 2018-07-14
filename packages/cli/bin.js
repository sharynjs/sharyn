#! /usr/bin/env node
const { spawn } = require('child_process')
const fs = require('fs')
const { swit } = require('@verekia/lib-lang')

const {
  lintTask,
  testTask,
  lintTestTask,
  prodLocalWithDockerTask,
  prodLocalWithoutDockerTask,
} = require('./commands')

const processes = [process]
const bf = undefined

const mySpawn = cmd => spawn(cmd, { shell: true, stdio: 'inherit' })

const hasDocker = fs.existsSync(`${process.cwd()}/docker-compose.yml`)

// const runLocalSetupThenServer = (serverCommand, runClientWatch = true) => {
//   multiPartCommand = true
//   if (fs.existsSync(`${process.cwd()}/docker-compose.yml`)) {
//     const firstSpawn = mySpawn(localServerSetup)
//     firstSpawn.on('close', code => {
//       if (code === 0) {
//         const serverSpawn = mySpawn(serverCommand)
//         let clientSpawn
//         serverSpawn.on('exit', () => {
//           process.exit(0)
//           if (clientSpawn) {
//             clientSpawn.exit(0)
//           }
//         })
//         if (runClientWatch) {
//           clientSpawn = mySpawn([rmDistCache, clientWatch].join(' && '))
//         }
//       }
//     })
//   } else {
//     const serverSpawn = mySpawn(serverCommand)
//     let clientSpawn
//     serverSpawn.on('exit', () => {
//       process.exit(0)
//       if (clientSpawn) {
//         clientSpawn.exit(0)
//       }
//     })
//     if (runClientWatch) {
//       clientSpawn = mySpawn([rmDistCache, clientWatch].join(' && '))
//     }
//   }
// }

const taskName = process.argv[2]

swit(
  taskName,
  [
    ['dev', () => {}],
    ['dev-server-only', () => {}],
    ['dev-client-only', () => {}],
    [
      'prod-local',
      () =>
        processes.push(
          mySpawn(hasDocker ? prodLocalWithDockerTask(bf) : prodLocalWithoutDockerTask(bf)),
        ),
    ],
    ['lint', () => processes.push(mySpawn(lintTask(bf)))],
    ['test', () => processes.push(mySpawn(testTask(bf)))],
    ['lint-test', () => processes.push(mySpawn(lintTestTask(bf)))],
  ],
  () => {
    // eslint-disable-next-line no-console
    console.error(`${taskName} is not a valid @sharyn/cli command.`)
    process.exit(1)
  },
)

// switch (scriptName) {
//   case 'dev': {
//     runLocalSetupThenServer(nodemonCommand)
//     break
//   }
//   case 'dev-server-only': {
//     runLocalSetupThenServer(
//       `./node_modules/.bin/cross-env USE_CLIENT_BUNDLE=false ${nodemonCommand}`,
//       false,
//     )
//     break
//   }
//   case 'dev-client-only': {
//     runLocalSetupThenServer(`./node_modules/.bin/cross-env ENABLE_SSR=false ${nodemonCommand}`)
//     break
//   }
//   default:
// }

processes.forEach(p => {
  p.on('exit', () => {
    processes.forEach(_p => {
      _p.exit(0)
    })
  })
})
