// @flow

// flow-disable-next-line
const wait = (ms: number = 1000) => new Promise(_ => setTimeout(_, ms))

export default wait
