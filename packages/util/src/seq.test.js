import seq from './seq'

test('seq', () => {
  let counterA = 0
  let counterB = 0
  seq(() => {
    counterA += 1
  })
  expect(counterA).toEqual(1)

  seq(
    () => {
      counterA += 1
    },
    () => {
      counterB += 1
    },
  )
  expect(counterA).toEqual(2)
  expect(counterB).toEqual(1)
})
