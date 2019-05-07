// @flow

import values from 'lodash/values'

import cond from './cond'

const arr = (...args: any[]) =>
  cond(
    [
      [args.length === 1 && Array.isArray(args[0]), args[0]],
      [args.length === 1 && args[0] instanceof Object, () => values(args[0])],
      [args.length === 1 && args[0] === undefined, []],
      [args.length === 1, [args[0]]],
      [args.length > 1, args],
    ],
    [],
  )

export default arr
