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
import { withStyles } from '@material-ui/core/styles'

import HomeIcon from '@material-ui/icons/Home'
import StoryHost from '../../packages/components/src/StoryHost'
import HeroButton from '../../packages/components/src/HeroButton'
import ProgressButton from '../../packages/components/src/ProgressButton'
import DelayedProgress from '../../packages/components/src/DelayedProgress'
import DrawerItem from '../../packages/components/src/DrawerItem'
import FontWeight from '../../packages/components/src/FontWeight'
import NavList from '../../packages/components/src/NavList'
import Page from '../../packages/components/src/Page'
import HideOnScrollView from './hide-on-scroll-view'
import NotificationsView from './notifications-view'
import { clearfix, middle } from '../../packages/css/src/util'
import withFields from '../../packages/hocs/src/with-fields'

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
  .add('DelayedProgress', () => <DelayedProgress />)
  .add('HOC/withFields', () => {
    const Input = ({ fields, handleFieldChange }: Object) => (
      <>
        <input name="a" value={fields.a?.value ?? ''} onChange={handleFieldChange} />
        <input
          name="b"
          value="hey"
          type="checkbox"
          checked={fields.b?.checked ?? false}
          onChange={handleFieldChange}
        />
        <select name="c" value={fields.c?.value ?? ''} onChange={handleFieldChange}>
          <option value="">Default</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </>
    )
    const InputWithFields = withFields()(Input)
    return <InputWithFields />
  })

storiesOf('Full Page', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withBackgrounds([
      { name: 'Gray', value: '#f2f2f2', default: true },
      { name: 'White', value: '#fff' },
    ]),
  )
  .addDecorator(muiTheme())
  .add('StoryHost', () => <StoryHost>StoryHost</StoryHost>)
  .add('StoryHost Border', () => <StoryHost border>StoryHost</StoryHost>)
  .add('StoryHost Width', () => (
    <StoryHost border width={200}>
      StoryHost
    </StoryHost>
  ))
  .add('Page Normal', () => <Page>Hello</Page>)
  .add('Page Middle', () => <Page middle>Hello middle</Page>)
  .add('Hide on Scroll', () => <HideOnScrollView />)
  .add('Notifications', () => <NotificationsView />)
  .add('CSS/middle', () => {
    const MiddleJSX = ({ classes }: { classes: Object }) => (
      <div className={classes.middle}>Middle</div>
    )
    const Middle = withStyles({ middle })(MiddleJSX)
    return <Middle />
  })
  .add('CSS/clearfix', () => {
    const ContainerJSX = ({ classes }: { classes: Object }) => (
      <div style={{ border: '1px solid blue' }} className={classes.clearfix}>
        <div style={{ float: 'left' }}>Float</div>
      </div>
    )
    const Container = withStyles({ clearfix })(ContainerJSX)
    return <Container />
  })
