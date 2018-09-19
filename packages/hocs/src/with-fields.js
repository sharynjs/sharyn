// @flow

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import withProps from 'recompose/withProps'

const withFields = (initialStateFn?: Function) => (Cmp: Function) =>
  compose(
    withState('fields', 'setFields', initialStateFn || {}),
    withProps({
      setField: (key, value) => ({ fields, setFields }) => setFields({ ...fields, [key]: value }),
    }),
    withHandlers({
      handleFieldChange: ({ fields, setFields }) => ({ target }, secondParam) => {
        const newFields = { ...fields }
        if (secondParam !== undefined ? secondParam === false : target.value === '') {
          delete newFields[target.name]
        } else {
          newFields[target.name] = secondParam === true ? 'on' : target.value
        }
        setFields(newFields)
      },
    }),
  )(Cmp)

export default withFields
