const fs = require('fs')
const path = require('path')

const jsdoc = require('jsdoc-api')
const mustache = require('mustache')

const moduleTemplate = fs.readFileSync('docs/templates/module.md').toString()

const files = ['packages/browser.clearcaches/index.js', 'packages/browser.getformfields/index.js']

const filesData = files.map(
  file =>
    jsdoc
      .explainSync({ files: file })
      .filter(({ kind }) => kind === 'function')
      .map(jsDocData => ({
        mdPath: `${jsDocData.meta.path}/${jsDocData.meta.filename.substring(
          0,
          jsDocData.meta.filename.length - 8
        )}README.md`,
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

filesData.forEach(fd => fs.writeFileSync(fd.mdPath, mustache.render(moduleTemplate, fd.jsDocData)))
