import { hasPackage, hasFile, requireCascade } from '../../packages/check-setup'

if (!hasFile('hey.txt')) {
  throw Error('Should have found hey.txt')
}

if (!hasPackage('lodash.noop')) {
  throw Error('Should have found lodash.noop')
}

const module = requireCascade('fake.js', 'require-me.js')

if (!module) {
  throw Error('Could not requireCascade')
}
