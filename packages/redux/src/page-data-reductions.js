// @flow

import {
  pageDataAddOperation,
  pageDataDeleteOperation,
  pageDataClearOperation,
} from './page-data-operations'

export const pageDataAddReductionFromDataProp = (payload: Object) => (state: Object) =>
  pageDataAddOperation(state, { ...payload.data })

export const pageDataAddInvalidFieldsReduction = (payload: Object) => (state: Object) =>
  pageDataAddOperation(state, { invalidFields: payload })

export const pageDataDeleteReduction = (key: string) => (state: Object) =>
  pageDataDeleteOperation(state, key)

export const pageDataClearInvalidFieldsReduction = () => (state: Object) =>
  pageDataDeleteOperation(state, 'invalidFields')

export const pageDataClearReduction = () => () => pageDataClearOperation()
