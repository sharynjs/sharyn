// @flow

import testSpawn from '../test-spawn'

const expectedOutput = `$ babel-node index.js
the env got checked
`

test('env', () => {
  expect(testSpawn('env', 'yarn test', true)).toBe(expectedOutput)
})
