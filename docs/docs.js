const fs = require('fs')

const jsdoc = require('jsdoc-api')
const mustache = require('mustache')

const moduleTemplate = fs.readFileSync('docs/templates/module.md').toString()
const groupTemplate = fs.readFileSync('docs/templates/group.md').toString()

const moduleFiles = [
  'packages/browser.clearcaches/index.js',
  'packages/browser.getformdata/index.js',
  'packages/util.swit/index.js',
  'packages/util.toggle/index.js',
  'packages/util.trycatch/index.js',
  'packages/util.wait/index.js',
]

const groups = [
  {
    group: 'browser',
    modules: [
      {
        name: 'clearCaches',
        lowercase: 'clearcaches',
        description: 'Clears all the service worker caches',
      },
      {
        name: 'getFormData',
        lowercase: 'getformdata',
        description: 'Gives you the form data as a plain object',
      },
    ],
    description: 'Helpers for code that runs in the browser.',
  },
  {
    group: 'react-hooks',
    modules: [
      {
        name: 'useStateObject',
        lowercase: 'usestateobject',
        description: 'A hook to manage a state that is an object',
      },
    ],
    description: 'React Hooks.',
  },
  {
    group: 'react-router',
    modules: [
      {
        name: 'PrivateRoute',
        lowercase: 'privateroute',
        description: 'A `Route` that redirects unauthenticated users',
      },
      {
        name: 'ServerOnlyRoute',
        lowercase: 'serveronlyroute',
        description: 'A `Route` that refreshes the page on the client',
      },
    ],
    description: 'Components for React Router.',
  },
  // { path: 'packages/util', modules: [] },
]

const modulesData = moduleFiles.map(
  file =>
    jsdoc
      .explainSync({ files: file })
      .filter(({ kind }) => kind === 'function')
      .filter(({ tags }) => tags) // To rule out the other undocumented functions of these files
      .map(jsDocData => ({
        mdPath: `${jsDocData.meta.path}/README.md`,
        jsDocData: {
          ...jsDocData,
          parentPackage: (jsDocData.tags.find(t => t.title === 'parentpackage') || {}).value,
          lowercaseName: jsDocData.name.toLowerCase(),
          formattedReturns: `**${jsDocData.returns[0].type.names[0]}**${
            jsDocData.returns[0].description ? `: ${jsDocData.returns[0].description}` : ''
          }`,
          formattedParams: jsDocData.params
            .map(
              p =>
                `**${p.optional ? '\\[' : ''}${p.name}${
                  p.defaultvalue !== undefined ? `=${p.defaultvalue.toString()}` : ''
                }${p.optional ? '\\]' : ''} (${p.type.names.join(' | ')})**: ${p.description}`
            )
            .join('\n\n'),
          formattedExamples: jsDocData.examples.join('\n\n'),
          examplesPlural: jsDocData.examples.length > 1 ? 's' : '',
        },
      }))[0]
)

modulesData.forEach(fd =>
  fs.writeFileSync(fd.mdPath, mustache.render(moduleTemplate, fd.jsDocData))
)

groups.forEach(group =>
  fs.writeFileSync(`packages/${group.group}/README.md`, mustache.render(groupTemplate, group))
)
