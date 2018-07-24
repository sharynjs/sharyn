// @flow

import testSpawn from '../test-spawn'

test('check-setup', () => {
  expect(testSpawn('check-setup', 'yarn test')).toBe(null)
})
