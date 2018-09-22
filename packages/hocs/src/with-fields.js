// @flow

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

const withFields = (initialStateFn?: Function) => (Cmp: Function) =>
  compose(
    withState('fields', 'setFields', initialStateFn || {}),
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
