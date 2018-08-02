// @flow

import React from 'react'
import NavList from '../packages/components/src/NavList'

const navItems = [
  { path: '/', title: 'Home' },
  [{ path: 'http://google.com', title: 'Google Same Tab' }, { hardLink: true }],
  [{ path: 'http://google.fr', title: 'Google New Tab' }, { newTab: true }],
]

const NavListView = () => (
  <div style={{ width: 400, margin: '300px auto', border: '1px solid blue' }}>
    <NavList {...{ navItems }} />
  </div>
)

export default NavListView
