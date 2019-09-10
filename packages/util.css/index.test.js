/* eslint-disable prettier/prettier */

const css = require('.')

test('css', () => {
  expect(css``).toBe('')
  expect(css`a`).toBe('a')
  expect(css`${'x'}`).toBe('x')
  expect(css`${'x'}a`).toBe('xa')
  expect(css`a${'x'}`).toBe('ax')
  expect(css`${'x'}${'y'}`).toBe('xy')
  expect(css`a${'x'}${'y'}`).toBe('axy')
  expect(css`${'x'}a${'y'}`).toBe('xay')
  expect(css`${'x'}${'y'}a`).toBe('xya')
  expect(css`a${'x'}b${'y'}`).toBe('axby')
  expect(css`${'x'}a${'y'}b`).toBe('xayb')
})
