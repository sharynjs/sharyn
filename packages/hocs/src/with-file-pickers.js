// @flow

import omitBy from 'lodash.omitby'
import compose from 'recompose/compose'
import withStateHandlers from 'recompose/withStateHandlers'
import withHandlers from 'recompose/withHandlers'

const isNil = val => val === null || val === undefined
const del = (fields, key) => {
  const newFields = { ...fields }
  delete newFields[key]
  return newFields
}

const withFilePickers = (initialStateFn?: Function) => (Cmp: Function) =>
  compose(
    withStateHandlers(
      { filePickers: initialStateFn || {} },
      {
        clearFilePickers: () => () => ({ filePickers: {} }),
        setFilePickers: () => payload => ({ filePickers: omitBy(payload, isNil) }),
        setFilePicker: ({ filePickers }) => (key, value) =>
          isNil(value)
            ? { filePickers: del(filePickers, key) }
            : { filePickers: { ...filePickers, [key]: value } },
        deleteFilePicker: ({ filePickers }) => key => ({ filePickers: del(filePickers, key) }),
        mergeFilePickers: ({ filePickers }) => payload => ({
          filePickers: omitBy({ ...filePickers, ...payload }, isNil),
        }),
      },
    ),
    withHandlers({
      filePicker: ({ filePickers }) => (key: string) => filePickers[key],
      filePickerHandler: ({ filePickers, setFilePickers }) => ({ target }) => {
        const newFilePickers = { ...filePickers }
        if (target.value !== '') {
          newFilePickers[target.name] = target.files
        } else {
          delete newFilePickers[target.name]
        }
        setFilePickers(omitBy(newFilePickers, isNil))
      },
    }),
  )(Cmp)

export default withFilePickers
