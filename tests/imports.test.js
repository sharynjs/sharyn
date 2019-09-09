const _sharyn = require('sharyn')
const _sharynDev = require('sharyn-dev')

test('imports', () => {
  ;[
    {
      groupName: 'browser',
      modules: ['clearCaches', 'getFormData'],
    },
    {
      groupName: 'commands',
      properties: [
        'httpServer',
        'serverlessDeploy',
        'serverlessOffline',
        'waitDockerPgReady',
        'webpackDevServer',
        'DOCKER_COMPOSE_UP',
        'WEBPACK_PROD',
        'SHX_COPY_PUBLIC_TO_DIST',
        'SHX_RM_DIST_DOTWEBPACK',
      ],
    },
    {
      groupName: 'prettier',
      isOnSharynDev: true,
      properties: ['printWidth', 'semi', 'singleQuote', 'trailingComma'],
    },
    {
      groupName: 'react-hooks',
      modules: ['useStateObject'],
    },
    {
      groupName: 'react-router',
      modules: ['PrivateRoute', 'ServerOnlyRoute'],
    },
    {
      groupName: 'scripts',
      properties: ['runSync', 'runAsync', 'series', 'parallel', 'scripts'],
    },
    {
      groupName: 'util',
      onSharynRoot: true,
      modules: [
        'between',
        'cycle',
        'defined',
        'either',
        'exists',
        'html',
        'ifs',
        'inlineThrow',
        'invoke',
        'swit',
        'toggle',
        'tryCatch',
        'wait',
      ],
      properties: ['getGlobal', 'setGlobal', 'getAllGlobal', 'deleteGlobal', 'clearGlobal'],
    },
  ].forEach(({ groupName, onSharynRoot, modules, properties, isOnSharynDev }) => {
    const group = require(`@sharyn/${groupName}`)
    const sharynGroup = require(`sharyn${isOnSharynDev ? '-dev' : ''}/${groupName}`)
    const sharyn = isOnSharynDev ? _sharynDev : _sharyn

    expect(typeof group).toBe('object')
    expect(group).toBe(sharynGroup)

    properties &&
      properties.forEach(propertyName => {
        expect(group[propertyName]).not.toBe(undefined)
        expect(group[propertyName]).toBe(sharynGroup[propertyName])
      })

    modules &&
      modules.forEach(moduleName => {
        const individualModule = require(`@sharyn/${groupName}.${moduleName.toLowerCase()}`)
        const groupModule = require(`@sharyn/${groupName}/${moduleName}`)
        const sharynModule = require(`sharyn${
          isOnSharynDev ? '-dev' : ''
        }/${groupName}/${moduleName}`)

        expect(individualModule).not.toBe(undefined)
        expect(individualModule).toBe(groupModule)
        expect(individualModule).toBe(sharynModule)
        expect(individualModule).toBe(group[moduleName])
        expect(individualModule).toBe(sharynGroup[moduleName])
        onSharynRoot && expect(individualModule).toBe(sharyn[moduleName])
      })
  })

  // import glob from '@sharyn/util.global'
  // import utilGlobal from '@sharyn/util/global'
  // import sharynUtilGlobal from 'sharyn/util/global'
  // import { getGlobal as getGlobal1 } from '@sharyn/util'
  // import { setGlobal as setGlobal1 } from '@sharyn/util'
  // import { getAllGlobal as getAllGlobal1 } from '@sharyn/util'
  // import { deleteGlobal as deleteGlobal1 } from '@sharyn/util'
  // import { clearGlobal as clearGlobal1 } from '@sharyn/util'
  // import { getGlobal as getGlobal2 } from 'sharyn/util'
  // import { setGlobal as setGlobal2 } from 'sharyn/util'
  // import { getAllGlobal as getAllGlobal2 } from 'sharyn/util'
  // import { deleteGlobal as deleteGlobal2 } from 'sharyn/util'
  // import { clearGlobal as clearGlobal2 } from 'sharyn/util'
  // import { getGlobal as getGlobal3 } from 'sharyn'
  // import { setGlobal as setGlobal3 } from 'sharyn'
  // import { getAllGlobal as getAllGlobal3 } from 'sharyn'
  // import { deleteGlobal as deleteGlobal3 } from 'sharyn'
  // import { clearGlobal as clearGlobal3 } from 'sharyn'

  // test global too
})
