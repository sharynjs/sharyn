// @flow

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

const withFields = (Cmp: Function) =>
  compose(
    withState('fields', 'setFields', {}),
    withHandlers({
      setField: ({ fields, setFields }) => ({ target }) => {
        const newFields = { ...fields }
        if (target.value === '') {
          delete newFields[target.name]
        } else {
          newFields[target.name] = target.value
        }
        setFields(newFields)
      },
    }),
  )(Cmp)

export default withFields
