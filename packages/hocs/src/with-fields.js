// @flow

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

const withFields = (Cmp: Function) =>
  compose(
    withState('fields', 'setFields', {}),
    withHandlers({
      setField: ({ fields, setFields }) => ({ target }) =>
        setFields({ ...fields, [target.name]: target.value }),
    }),
  )(Cmp)

export default withFields
