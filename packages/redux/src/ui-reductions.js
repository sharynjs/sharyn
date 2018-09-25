// @flow

import curryRight from 'lodash.curryright'
import isEmpty from 'lodash.isempty'

export const activatePageLoading = (uiState: Object) => ({ ...uiState, isPageLoading: true })
export const deactivatePageLoading = (uiState: Object) => {
  const { isPageLoading, ...newUiState } = uiState
  return newUiState
}

export const activateComponentLoading = curryRight((uiState: Object, name?: string) => ({
  ...uiState,
  ...(uiState.loadingComponents || name
    ? {
        loadingComponents: {
          ...uiState.loadingComponents,
          ...(name ? { [name]: true } : {}),
        },
      }
    : {}),
}))

export const deactivateComponentLoading = curryRight((uiState: Object, name?: string) => {
  const uiStateClone = { ...uiState }
  const { loadingComponents, ...uiStateCloneRest } = uiStateClone
  if (loadingComponents && name) {
    delete loadingComponents[name]
  }
  return {
    ...uiStateCloneRest,
    ...(!isEmpty(loadingComponents) ? { loadingComponents } : {}),
  }
})

export const addOneNotification = curryRight((uiState: Object, notification?: Object) => ({
  ...uiState,
  notifications: [
    ...uiState.notifications,
    ...(notification
      ? [typeof notification === 'string' ? { message: notification } : notification]
      : []),
  ],
}))

export const addMultipleNotifications = curryRight(
  (uiState: Object, notifications?: Object[] = []) => ({
    ...uiState,
    notifications: [
      ...uiState.notifications,
      ...notifications.map(
        notification =>
          typeof notification === 'string' ? { message: notification } : notification,
      ),
    ],
  }),
)

export const removeFirstNotification = (uiState: Object) => ({
  ...uiState,
  notifications: uiState.notifications.splice(1),
})
