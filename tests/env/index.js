import { HEY } from '../../packages/env'

if (!HEY) {
  throw Error('Should have found HEY')
}

if (HEY !== 123) {
  throw Error('Didnt properly parse HEY')
}
