// @flow

// flow-disable-next-line
import swit from '@sharyn/util/swit'

import { loginCase, logoutCase } from './user-cases'

const userReducer = (
  userState: ?Object = null,
  { type, payload }: { type: string, payload: any },
) => swit(type, [loginCase, logoutCase].map(c => c(userState, payload)), userState)

export default userReducer
