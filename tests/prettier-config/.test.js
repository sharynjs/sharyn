// @flow

import testSpawn from '../test-spawn'

const expectedOutput = `$ prettier index.js
console.log('hi')
`

test('prettier-config', () => {
  expect(testSpawn('prettier-config', 'yarn test', true)).toBe(expectedOutput)
})
