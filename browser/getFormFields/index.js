const getFormFields = (formElement, onlyTruthy) => {
  const formData = new FormData(formElement)
  const data = {}
  Array.from(formData.entries()).forEach(([key, value]) => {
    if (!onlyTruthy || value) {
      data[key] = value
    }
  })
  return data
}

module.exports = getFormFields
