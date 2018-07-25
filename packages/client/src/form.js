// @flow

const getFormData_ = (formEl: Object) => {
  const formData = new FormData(formEl)
  const data = {}
  Array.from(formData.entries()).forEach(pair => {
    // eslint-disable-next-line prefer-destructuring
    data[pair[0]] = pair[1]
  })
  return data
}

export const getFormData = getFormData_
