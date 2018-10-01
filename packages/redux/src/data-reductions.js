// @flow

import { addDataOperation, delDataOperation, clearDataOperation } from './data-operations'

export const addDataReductionFromDataProp = (payload: Object) => (state: Object) =>
  addDataOperation(state, { ...payload.data })

export const addInvalidFieldsDataReduction = (payload: Object) => (state: Object) =>
  addDataOperation(state, { invalidFields: payload })

export const delDataReduction = (key: string) => (state: Object) => delDataOperation(state, key)

export const clearInvalidFieldsReduction = () => (state: Object) =>
  delDataOperation(state, 'invalidFields')

export const clearDataReduction = () => () => clearDataOperation()
