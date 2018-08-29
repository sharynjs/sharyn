// @flow

import React from 'react'
import FontWeight from '../packages/components/src/FontWeight'

const FontWeightView = () => (
  <div style={{ textAlign: 'center', marginTop: 100 }}>
    <FontWeight>Semi bold (default)</FontWeight>
    <br />
    <FontWeight bolder>Bolder</FontWeight>
    <br />
    <FontWeight light>Light</FontWeight>
  </div>
)

export default FontWeightView
