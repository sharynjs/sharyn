// @flow

import testSpawn from '../test-spawn'

test('redis', () => {
  expect(testSpawn('redis', 'yarn test')).toBe(null)
})
