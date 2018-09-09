// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

const withDefault = (propCheck: Function, DefaultCmp: Function) => (BaseCmp: Function) => (
  props: Object,
) => {
  if (propCheck(props)) {
    return <BaseCmp {...props} />
  }
  return DefaultCmp ? <DefaultCmp {...props} /> : null
}

export default withDefault
