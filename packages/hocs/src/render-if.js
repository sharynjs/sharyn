// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

const renderIf = (propCheck: Function, AltCmp?: Function) => (BaseCmp: Function) => (
  props: Object,
) => {
  if (propCheck(props)) {
    return AltCmp ? <AltCmp {...props} /> : null
  }
  return <BaseCmp {...props} />
}

export default renderIf
