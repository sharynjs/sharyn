test('imports', () => {
  ;[
    {
      groupName: 'actions',
      properties: ['action', 'errorAction'],
    },
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
      isInSharynDev: true,
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
      groupName: 'tags',
      modules: ['css', 'html'],
    },
    {
      groupName: 'util',
      modules: [
        'between',
        'cycle',
        'defined',
        'either',
        'exists',
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
  ].forEach(({ groupName, modules, properties, isInSharynDev, multipleExportsModules }) => {
    const group = require(`@sharyn/${groupName}`)
    const sharynGroup = require(`sharyn${isInSharynDev ? '-dev' : ''}/${groupName}`)

    expect(typeof group).toBe('object')
    expect(group).toStrictEqual(sharynGroup)

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
          isInSharynDev ? '-dev' : ''
        }/${groupName}/${moduleName}`)

        expect(individualModule).not.toBe(undefined)
        expect(individualModule).toBe(groupModule)
        expect(individualModule).toBe(sharynModule)
        expect(individualModule).toBe(group[moduleName])
        expect(individualModule).toBe(sharynGroup[moduleName])
      })

    multipleExportsModules &&
      multipleExportsModules.forEach(({ name, exportNames }) => {
        const individualModule = require(`@sharyn/${groupName}.${name.toLowerCase()}`)
        const groupModule = require(`@sharyn/${groupName}/${name}`)
        const sharynModule = require(`sharyn${isInSharynDev ? '-dev' : ''}/${groupName}/${name}`)

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
        })
      })
  })
})
