// @flow

/* eslint-disable import/no-extraneous-dependencies, no-alert */

import React from 'react'

import { muiTheme } from 'storybook-addon-material-ui'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { host } from 'storybook-host'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import HomeIcon from '@material-ui/icons/Home'
import HeroButton from '../../packages/components/src/HeroButton'
import ProgressButton from '../../packages/components/src/ProgressButton'
import DrawerItem from '../../packages/components/src/DrawerItem'
import FontWeight from '../../packages/components/src/FontWeight'
import NavList from '../../packages/components/src/NavList'
import Page from '../../packages/components/src/Page'
import HideOnScrollView from './hide-on-scroll-view'
import NotificationsView from './notifications-view'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withBackgrounds([
      { name: 'White', value: '#fff', default: true },
      { name: 'Gray', value: '#f2f2f2' },
    ]),
  )
  .addDecorator(muiTheme())
  .addDecorator(host({ align: 'center middle', backdrop: 'transparent' }))
  .add('HeroButton/Hard Link', () => (
    <HeroButton label="Google" icon={HomeIcon} dest="http://google.com" hardLink />
  ))
  .add('HeroButton/Custom style', () => (
    <HeroButton style={{ color: '#faa' }} label="Style" icon={HomeIcon} dest="#" hardLink />
  ))
  .add('HeroButton/New Tab', () => (
    <HeroButton label="Google New Tab" icon={HomeIcon} dest="http://google.com" newTab />
  ))
  .add('HeroButton/Route', () => (
    <BrowserRouter>
      <div>
        <Route exact path="/test" component={() => 'OK'} />
        <HeroButton label="React Router Link with route as dest" icon={HomeIcon} dest="/test" />
      </div>
    </BrowserRouter>
  ))
  .add('ProgressButton/Normal', () => <ProgressButton>Progress Button</ProgressButton>)
  .add('ProgressButton/Style', () => (
    <ProgressButton style={{ color: 'red' }} data-test="test">
      Progress Button
    </ProgressButton>
  ))
  .add('ProgressButton/Loading', () => <ProgressButton isLoading>Progress Button</ProgressButton>)
  .add('DrawerItem', () => (
    <div style={{ width: 400 }}>
      <DrawerItem label="Hello" icon={HomeIcon} />
      <DrawerItem label="Hello without icon" />
    </div>
  ))
  .add('NavList', () => (
    <BrowserRouter>
      <div style={{ width: 400 }}>
        <Route exact path="/test" component={() => 'OK'} />
        <NavList
          navItems={[
            { path: '/test', title: 'Home' },
            [{ path: 'http://google.com', title: 'Google Same Tab' }, { hardLink: true }],
            [{ path: 'http://google.fr', title: 'Google New Tab' }, { newTab: true }],
          ]}
        />
      </div>
    </BrowserRouter>
  ))
  .add('FontWeight', () => (
    <div>
      <FontWeight>Semi bold (default)</FontWeight>
      <br />
      <FontWeight bolder>Bolder</FontWeight>
      <br />
      <FontWeight light>Light</FontWeight>
      <br />
      <FontWeight style={{ color: 'blue' }} onClick={() => alert('hi')}>
        Props
      </FontWeight>
    </div>
  ))

storiesOf('Full Page', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withBackgrounds([
      { name: 'Gray', value: '#f2f2f2', default: true },
      { name: 'White', value: '#fff' },
    ]),
  )
  .addDecorator(muiTheme())
  .add('Page Normal', () => <Page>Hello</Page>)
  .add('Page Middle', () => <Page middle>Hello middle</Page>)
  .add('Hide on Scroll', () => <HideOnScrollView />)
  .add('Notifications', () => <NotificationsView />)
