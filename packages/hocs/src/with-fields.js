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

const withFields = (initialFields?: any = {}) => (Cmp: Function) =>
  compose(
    withStateHandlers(
      props => ({
        fields: typeof initialFields === 'function' ? initialFields(props) : initialFields,
      }),
      {
        clearFields: () => () => ({ fields: {} }),
        setFields: () => payload => ({ fields: omitBy(payload, isNil) }),
        setField: ({ fields }) => (key, value) =>
          isNil(value) ? { fields: del(fields, key) } : { fields: { ...fields, [key]: value } },
        deleteField: ({ fields }) => key => ({ fields: del(fields, key) }),
        mergeFields: ({ fields }) => payload => ({
          fields: omitBy({ ...fields, ...payload }, isNil),
        }),
      },
    ),
    withHandlers({
      field: ({ fields }) => (key: string, isBoolean?: boolean) =>
        isBoolean ? !!fields[key] || fields[key] === '' : fields[key] ?? '',
      onChange: ({ fields, setFields }) => ({ target }) => {
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
        setFields(omitBy(newFields, isNil))
      },
    }),
  )(Cmp)

export default withFields
