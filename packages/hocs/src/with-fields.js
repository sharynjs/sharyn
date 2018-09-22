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
        newFields[target.name] = { value: target.value }
        if (target.type === 'checkbox') {
          newFields[target.name].checked = target.checked
        }
        setFields(newFields)
      },
    }),
  )(Cmp)

export default withFields
