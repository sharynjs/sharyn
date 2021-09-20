import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

const external = ['react', '@chakra-ui/react']

export default [
  {
    input: 'src/index.ts',
    output: { dir: './', entryFileNames: pkg.main, format: 'cjs' },
    plugins: [typescript({ declaration: true, declarationDir: 'dist/types', rootDir: 'src/' })],
    external,
  },
  {
    input: 'src/index.ts',
    output: { file: pkg.module, format: 'es' },
    plugins: [typescript()],
    external,
  },
]
