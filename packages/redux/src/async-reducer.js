// @flow

// flow-disable-next-line
import swit from '@sharyn/util/swit'

import {
  asyncAsyncRequestCase,
  asyncAsyncSuccessOrFailureCase,
  asyncFetchPageRequestCase,
  asyncFetchPageSuccessOrFailureCase,
  asyncNavigationCase,
} from './async-cases'

const asyncReducer = (asyncState: Object = {}, { type, payload }: { type: string, payload: any }) =>
  swit(
    type,
    [
      asyncFetchPageRequestCase,
      asyncAsyncRequestCase,
      asyncNavigationCase,
      asyncAsyncSuccessOrFailureCase,
      asyncFetchPageSuccessOrFailureCase,
    ].map(c => c(asyncState, payload)),
    asyncState,
  )

export default asyncReducer
