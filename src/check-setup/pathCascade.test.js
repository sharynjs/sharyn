import pathCascade from './pathCascade'

test('pathCascade', () => {
  expect(pathCascade('doesntexist.txt')).toBe(undefined)
  expect(pathCascade('package.json')).toBe('package.json')
  expect(pathCascade('doesntexist.txt', 'package.json')).toBe('package.json')
  expect(pathCascade(['doesntexist.txt', 'package.json', 'doesntexist.txt'])).toBe('package.json')
})
