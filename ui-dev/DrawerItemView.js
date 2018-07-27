// @flow

import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import DrawerItem from '../packages/components/src/DrawerItem'

const DrawerItemView = () => (
  <div style={{ width: 400, margin: '300px auto', border: '1px solid blue' }}>
    <DrawerItem label="Hello" icon={HomeIcon} />
    <DrawerItem label="Hello without icon" />
  </div>
)

export default DrawerItemView
