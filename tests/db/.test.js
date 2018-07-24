// @flow

import testSpawn from '../test-spawn'

test('db', () => {
  expect(testSpawn('db', 'yarn test')).toBe(null)
})
