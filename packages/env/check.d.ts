export function check(envVarName: string, predicate: Function, errorMessageFn?: Function): boolean
export function checkPresent(...envVarName: string[]): boolean
export function checkAbsent(...envVarName: string[]): boolean

declare const _default: {
  check: typeof check
  checkPresent: typeof checkPresent
  checkAbsent: typeof checkAbsent
}

export default _default
