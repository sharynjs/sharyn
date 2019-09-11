const fs = require('fs')

const klawSync = require('klaw-sync')

const prependComment = txt =>
  `// This file is auto-generated, modify the source in /build\n\n${txt}`

const folders = ['browser', 'react-hooks', 'react-router', 'tags', 'util']

folders.forEach(folder =>
  klawSync(`build/${folder}`).forEach(({ path }) => {
    const content = prependComment(fs.readFileSync(path).toString())
    const fileName = path.substr(path.lastIndexOf('/') + 1)
    fs.writeFileSync(`packages/${folder}/${fileName}`, content)
    fs.writeFileSync(`packages/_sharyn/${folder}/${fileName}`, content)
  })
)
