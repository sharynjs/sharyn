const { check, checkPresent, checkAbsent } = require('./check')

const oldProcessEnv = process.env

beforeEach(() => {
  process.env = {}
})

afterAll(() => {
  process.env = oldProcessEnv
})

test('checkPresent', () => {
  expect(() => checkPresent()).toThrow('checkPresent takes at least 1 argument')
  expect(() => checkPresent('ABC')).toThrow('ABC is missing in process.env')

  process.env = { ABC: 'abc' }
  expect(checkPresent('ABC')).toBe(true)
  process.env = { ABC: '' }
  expect(checkPresent('ABC')).toBe(true)
  process.env = { ABC: '', DEF: '', HIJ: '' }
  expect(checkPresent('ABC', 'DEF', 'HIJ')).toBe(true)
  expect(() => checkPresent('ABC', 'DEF', 'HIJ', 'XYZ')).toThrow('XYZ is missing in process.env')
})

test('checkAbsent', () => {
  expect(() => checkAbsent()).toThrow('checkAbsent takes 1 argument')

  expect(checkAbsent('ABC')).toBe(true)
  process.env = { ABC: 'abc' }
  expect(() => checkAbsent('ABC')).toThrow('ABC is not allowed in process.env')
  process.env = { ABC: '' }
  expect(() => checkAbsent('ABC')).toThrow('ABC is not allowed in process.env')
  process.env = { ABC: undefined }
  expect(checkAbsent('ABC')).toBe(true)
  process.env = { XYZ: '' }
  expect(checkAbsent('ABC', 'DEF', 'HIJ')).toBe(true)
  process.env = { HIJ: '' }
  expect(() => checkAbsent('ABC', 'DEF', 'HIJ')).toThrow('HIJ is not allowed in process.env')
})

test('check', () => {
  expect(() => check()).toThrow('check takes at least 2 arguments')
  expect(() => check(1)).toThrow('check takes at least 2 arguments')

  expect(check('ABC', () => true)).toBe(true)
  expect(() => check('ABC', () => false)).toThrow('Environment variable ABC is invalid.')
  expect(() => check('ABC', () => false, name => `custom ${name}`)).toThrow('custom ABC')

  process.env = { ABC: 150 }
  expect(check('ABC', val => val > 100)).toBe(true)
  expect(() => check('ABC', val => val > 1000)).toThrow('Environment variable ABC is invalid.')
})
