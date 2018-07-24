// @flow

import testSpawn from '../test-spawn'

test('babel-preset', () => {
  expect(testSpawn('babel-preset', 'yarn test')).toBe(null)
})
