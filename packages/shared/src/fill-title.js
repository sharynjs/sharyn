// @flow

const fillTitle = (title?: string, pageData?: Object) => {
  if (title) {
    return typeof title === 'function' ? title(pageData) : title
  }
  return undefined
}

export default fillTitle
