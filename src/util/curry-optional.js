// @flow

const curryOptional = (fn: Function, numArgs: number) => (...args: any[]) => (x: any) =>
  fn(
    ...[
      ...Array(numArgs)
        .fill(undefined)
        .map((val, i) => args[i]),
      x,
    ],
  )

export default curryOptional
