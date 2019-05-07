import pathCascade from './pathCascade'

test('pathCascade', () => {
  expect(pathCascade('doesntexist.txt')).toBe(undefined)
  expect(pathCascade('lerna.json')).toBe('lerna.json')
  expect(pathCascade('doesntexist.txt', 'lerna.json')).toBe('lerna.json')
  expect(pathCascade(['doesntexist.txt', 'lerna.json', 'doesntexist.txt'])).toBe('lerna.json')
})
