// @flow

import testSpawn from '../test-spawn'

const expectedOutput = `$ babel-node index.js
hey
`

test('koa', () => {
  expect(testSpawn('koa', 'yarn test', true)).toBe(expectedOutput)
})
