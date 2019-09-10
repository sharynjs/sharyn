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
        'css',
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
      multipleExportsModules: [
        {
          name: 'global',
          exportNames: ['getGlobal', 'setGlobal', 'getAllGlobal', 'deleteGlobal', 'clearGlobal'],
        },
      ],
    },
  ].forEach(
    ({ groupName, onSharynRoot, modules, properties, isOnSharynDev, multipleExportsModules }) => {
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

      multipleExportsModules &&
        multipleExportsModules.forEach(({ name, exportNames }) => {
          const individualModule = require(`@sharyn/${groupName}.${name.toLowerCase()}`)
          const groupModule = require(`@sharyn/${groupName}/${name}`)
          const sharynModule = require(`sharyn${isOnSharynDev ? '-dev' : ''}/${groupName}/${name}`)

          expect(individualModule).not.toBe(undefined)
          expect(individualModule).toBe(groupModule)
          expect(individualModule).toBe(sharynModule)
          exportNames.forEach(exportName => {
            const exp = individualModule[exportName]
            expect(exp).not.toBe(undefined)
            expect(exp).toBe(groupModule[exportName])
            expect(exp).toBe(sharynModule[exportName])
            expect(exp).toBe(group[exportName])
            expect(exp).toBe(sharynGroup[exportName])
            onSharynRoot && expect(exp).toBe(sharyn[exportName])
          })
        })
    }
  )
})
