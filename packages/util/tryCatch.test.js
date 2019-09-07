const tryCatch = require('./tryCatch')

test('tryCatch', () => {
  expect(() => tryCatch()).toThrow('tryCatch takes at least 1 argument')

  expect(tryCatch(() => 3)).toBe(3)
  expect(
    tryCatch(() => {
      throw 'a'
    })
  ).toBe(undefined)

  let catchFn = jest.fn(x => x)
  expect(tryCatch(() => 3, catchFn)).toBe(3)
  expect(catchFn).not.toHaveBeenCalled()
  expect(
    tryCatch(() => {
      throw 'a'
    }, catchFn)
  ).toBe('a')
  expect(catchFn).toHaveBeenLastCalledWith('a')

  expect(
    tryCatch(
      () => {
        throw 'a'
      },
      () => {}
    )
  ).toBe(undefined)

  let finallyFn = jest.fn(() => {})
  expect(tryCatch(() => 3, null, finallyFn)).toBe(3)
  expect(finallyFn).toHaveBeenCalledTimes(1)

  expect(
    tryCatch(
      () => {
        throw 'b'
      },
      catchFn,
      finallyFn
    )
  ).toBe('b')

  expect(finallyFn).toHaveBeenCalledTimes(2)
})
