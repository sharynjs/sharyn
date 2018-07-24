import { hasPackage, hasFile } from '../../packages/check-setup'

if (!hasFile('hey.txt')) {
  throw Error('Should have found hey.txt')
}

if (!hasPackage('lodash.noop')) {
  throw Error('Should have found lodash.noop')
}
