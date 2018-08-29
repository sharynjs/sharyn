// @flow

const formData = (mainParam: Object, includeEmptyFields: boolean = false) => {
  const fData = new FormData(mainParam.target ? mainParam.target : mainParam)
  const data: Object = {}
  Array.from(fData.entries()).forEach(pair => {
    if (includeEmptyFields || pair[1]) {
      // eslint-disable-next-line prefer-destructuring
      data[pair[0]] = pair[1]
    }
  })
  return data
}

export default formData
