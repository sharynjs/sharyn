const { action, errorAction } = require('.')

test('actions', () => {
  expect(() => action()).toThrow()
  expect(action('hello')).toEqual({ type: 'hello' })
  expect(action('hello', 'payload')).toEqual({ type: 'hello', payload: 'payload' })
  expect(action('hello', 'payload', 'meta')).toEqual({
    type: 'hello',
    payload: 'payload',
    meta: 'meta',
  })
  expect(errorAction()).toEqual({ error: true, type: 'error' })
  expect(errorAction('hello')).toEqual({ error: true, type: 'hello' })
  expect(errorAction('hello', 'payload')).toEqual({
    error: true,
    type: 'hello',
    payload: 'payload',
  })
  expect(errorAction('hello', 'payload', 'meta')).toEqual({
    error: true,
    type: 'hello',
    payload: 'payload',
    meta: 'meta',
  })
})
