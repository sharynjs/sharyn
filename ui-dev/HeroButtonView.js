// @flow

import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import HeroButton from '../packages/components/src/HeroButton'

const HeroButtonView = () => (
  <div style={{ textAlign: 'center', marginTop: 100 }}>
    <div style={{ display: 'inline-block', border: '1px solid blue' }}>
      <HeroButton label="Google" icon={HomeIcon} dest="http://google.com" />
    </div>
    <br />
    <br />
    <div style={{ display: 'inline-block', border: '1px solid blue' }}>
      <HeroButton label="Google New Tab" icon={HomeIcon} newTab dest="http://google.com" />
    </div>
    <br />
    <br />
    <div style={{ display: 'inline-block', border: '1px solid blue' }}>
      <HeroButton
        label="React Router Link with route as dest"
        icon={HomeIcon}
        dest={{ path: '/' }}
      />
    </div>
  </div>
)

export default HeroButtonView
