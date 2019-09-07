const inlineThrow = require('./inlineThrow')

test('inlineThrow', () => {
  expect(() => inlineThrow()).toThrow(undefined)
  expect(() => inlineThrow('x')).toThrow('x')
})
