/* eslint-disable prettier/prettier */

const html = require('.')

test('html', () => {
  expect(html``).toBe('')
  expect(html`a`).toBe('a')
  expect(html`${'x'}`).toBe('x')
  expect(html`${'x'}a`).toBe('xa')
  expect(html`a${'x'}`).toBe('ax')
  expect(html`${'x'}${'y'}`).toBe('xy')
  expect(html`a${'x'}${'y'}`).toBe('axy')
  expect(html`${'x'}a${'y'}`).toBe('xay')
  expect(html`${'x'}${'y'}a`).toBe('xya')
  expect(html`a${'x'}b${'y'}`).toBe('axby')
  expect(html`${'x'}a${'y'}b`).toBe('xayb')
})