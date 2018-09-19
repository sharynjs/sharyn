// @flow

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import withProps from 'recompose/withProps'

const withFields = (initialStateFn?: Function) => (Cmp: Function) =>
  compose(
    withState('fields', 'setFields', initialStateFn || {}),
    withProps({
      setField: ({ fields, setFields }) => (key, value) => setFields({ ...fields, [key]: value }),
    }),
    withHandlers({
      handleFieldChange: ({ fields, setFields }) => ({ target }, checked) => {
        const newFields = { ...fields }
        if (checked !== undefined ? checked === false : target.value === '') {
          delete newFields[target.name]
        } else {
          newFields[target.name] = checked ? 'on' : target.value
        }
        setFields(newFields)
      },
    }),
  )(Cmp)

export default withFields
