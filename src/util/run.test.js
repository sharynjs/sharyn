import run from './run'

test('run', () => {
  expect(run(() => 2)).toEqual(2)
})
