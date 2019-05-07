// @flow

// flow-disable-next-line
import swit from '@sharyn/util/swit'

const createReducer = (cases: any[] = [], initialState: any = {}) => (
  state: Object = initialState,
  { type, payload }: { type: string, payload: any } = {},
) => swit(type, cases.map(c => [c[0], () => c[1](payload)(state)]), state)

export default createReducer
