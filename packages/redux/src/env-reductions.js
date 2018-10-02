// @flow

export const disableIsServerRenderReduction = () => (state: Object) => ({
  ...state,
  isServerRender: false,
})

export const onlineReduction = () => (state: Object) => ({ ...state, isOnline: true })
export const offlineReduction = () => (state: Object) => ({ ...state, isOnline: false })
