// @flow

import { createAction } from 'redux-actions'

export const SHARYN_FETCH_PAGE_REQUEST = 'SHARYN_FETCH_PAGE_REQUEST'
export const SHARYN_FETCH_PAGE_SUCCESS = 'SHARYN_FETCH_PAGE_SUCCESS'
export const SHARYN_FETCH_PAGE_FAILURE = 'SHARYN_FETCH_PAGE_FAILURE'
export const fetchPageRequest = createAction(SHARYN_FETCH_PAGE_REQUEST)
export const fetchPageSuccess = createAction(SHARYN_FETCH_PAGE_SUCCESS)
export const fetchPageFailure = createAction(SHARYN_FETCH_PAGE_FAILURE)

export const SHARYN_INVALIDATE_FIELDS = 'SHARYN_INVALIDATE_FIELDS'
export const invalidateFields = createAction(SHARYN_INVALIDATE_FIELDS)

export const SHARYN_CLEAR_INVALID_FIELDS = 'SHARYN_CLEAR_INVALID_FIELDS'
export const clearInvalidFields = createAction(SHARYN_CLEAR_INVALID_FIELDS)

export const SHARYN_NAVIGATION = 'SHARYN_NAVIGATION'
export const navigation = createAction(SHARYN_NAVIGATION)

export const SHARYN_START_CLIENT_NAVIGATION = 'SHARYN_START_CLIENT_NAVIGATION'
export const startClientNavigation = createAction(SHARYN_START_CLIENT_NAVIGATION)

export const SHARYN_ONLINE = 'SHARYN_ONLINE'
export const SHARYN_OFFLINE = 'SHARYN_OFFLINE'
export const online = createAction(SHARYN_ONLINE)
export const offline = createAction(SHARYN_OFFLINE)

export const SHARYN_DISMISS_FIRST_NOTIFICATION = 'SHARYN_DISMISS_FIRST_NOTIFICATION'
export const dismissFirstNotification = createAction(SHARYN_DISMISS_FIRST_NOTIFICATION)

export const SHARYN_ASYNC_REQUEST = 'SHARYN_ASYNC_REQUEST'
export const SHARYN_ASYNC_SUCCESS = 'SHARYN_ASYNC_SUCCESS'
export const SHARYN_ASYNC_FAILURE = 'SHARYN_ASYNC_FAILURE'
export const asyncRequest = createAction(SHARYN_ASYNC_REQUEST)
export const asyncSuccess = createAction(SHARYN_ASYNC_SUCCESS)
export const asyncFailure = createAction(SHARYN_ASYNC_FAILURE)

export const SHARYN_DELETE_ASYNC = 'SHARYN_DELETE_ASYNC'
export const deleteAsync = createAction(SHARYN_DELETE_ASYNC)