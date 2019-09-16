const id = require('.')

test('nanoid', () => {
  expect(id().length).toBe(20)
  expect(id(3).length).toBe(3)
})
