// @flow

// flow-disable-next-line
import swit from '@sharyn/util/swit'

import { offlineCase, onlineCase, startClientNavigationCase } from './env-cases'

const envReducer = (envState: Object = {}, { payload, type }: Object) =>
  swit(
    type,
    [startClientNavigationCase, onlineCase, offlineCase].map(c => c(envState, payload)),
    envState,
  )

export default envReducer
