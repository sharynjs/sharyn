// @flow

const fn = (str: string) => str

const obj = undefined

console.log(obj?.maybe)

console.log(undefined ?? 'default')

fn('bla')

export default obj
