// @flow

import compose from 'recompose/compose'
import withStateHandlers from 'recompose/withStateHandlers'
import withHandlers from 'recompose/withHandlers'

const withFields = (initialStateFn?: Function) => (Cmp: Function) =>
  compose(
    withStateHandlers(
      { fields: initialStateFn || {} },
      {
        setFields: () => payload => ({ fields: payload }),
        setField: ({ fields }) => (key, value) => ({ fields: { ...fields, [key]: value } }),
        mergeFields: ({ fields }) => payload => ({ fields: { ...fields, ...payload } }),
      },
    ),
    withHandlers({
      handleFieldChange: ({ fields, setFields }) => ({ target }) => {
        const newFields = { ...fields }
        if (target.type === 'checkbox') {
          if (target.checked) {
            newFields[target.name] = target.value
          } else {
            delete newFields[target.name]
          }
        } else if (target.value !== '') {
          newFields[target.name] = target.value
        } else {
          delete newFields[target.name]
        }
        setFields(newFields)
      },
    }),
  )(Cmp)

export default withFields
