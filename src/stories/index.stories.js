// @flow

/* eslint-disable import/no-extraneous-dependencies, no-alert */

import React from 'react'

import HomeIcon from '@material-ui/icons/Home'
import withStyles from '@material-ui/core/styles/withStyles'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { boolean, withKnobs } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import Route from 'react-router/Route'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { muiTheme } from 'storybook-addon-material-ui'
import { host } from 'storybook-host'

import DelayedProgress from '../../packages/components/src/DelayedProgress'
import DrawerItem from '../../packages/components/src/DrawerItem'
import FontWeight from '../../packages/components/src/FontWeight'
import HeroButton from '../../packages/components/src/HeroButton'
import Page from '../../packages/components/src/Page'
import ProgressButton from '../../packages/components/src/ProgressButton'
import { RefreshButtonCmp } from '../../packages/components/src/RefreshButton'
import StoryHost from '../../packages/components/src/StoryHost'
import A from '../../packages/components/src/A'
import B from '../../packages/components/src/B'
import Div from '../../packages/components/src/Div'
import El from '../../packages/components/src/El'
import H1 from '../../packages/components/src/H1'
import H2 from '../../packages/components/src/H2'
import H3 from '../../packages/components/src/H3'
import H4 from '../../packages/components/src/H4'
import H5 from '../../packages/components/src/H5'
import H6 from '../../packages/components/src/H6'
import I from '../../packages/components/src/I'
import Li from '../../packages/components/src/Li'
import P from '../../packages/components/src/P'
import Span from '../../packages/components/src/Span'
import { clearfix, middle } from '../../packages/css/src/util'
import withFields from '../../packages/hocs/src/with-fields'
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
  .add('ProgressButton/Offline', () => (
    <ProgressButton isOnline={false}>Progress Button</ProgressButton>
  ))
  .add('DrawerItem', () => (
    <div style={{ width: 400 }}>
      <DrawerItem label="Hello" icon={HomeIcon} />
      <DrawerItem label="Hello without icon" />
    </div>
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
  .add('RefreshButtonCmp', () => (
    <RefreshButtonCmp alwaysShow isRefreshing={boolean('isRefreshing', false)} />
  ))
  .add('HOC/withFields', () => {
    const Input = ({
      field,
      fields,
      onChange,
      deleteField,
      clearFields,
      setField,
      setFields,
      mergeFields,
    }: Object) => (
      <>
        <input name="text" value={field('text')} {...{ onChange }} />
        <input
          name="checkboxwithvalue"
          value="hey"
          type="checkbox"
          checked={field('checkboxwithvalue')}
          {...{ onChange }}
        />
        <input
          name="checkboxwithoutvalue"
          type="checkbox"
          checked={field('checkboxwithoutvalue')}
          {...{ onChange }}
        />
        <input
          name="checkboxemptystring"
          type="checkbox"
          value=""
          checked={field('checkboxemptystring', true)}
          {...{ onChange }}
        />
        <select name="select" value={field('select')} {...{ onChange }}>
          <option value="">Default</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        {/* eslint-disable-next-line no-console */}
        <button type="button" onClick={() => console.log(fields)}>
          Log fields
        </button>
        <button type="button" onClick={() => deleteField('text')}>
          Delete text field
        </button>
        <button type="button" onClick={() => clearFields()}>
          Clear fields
        </button>
        <button type="button" onClick={() => setField('text', 'Banana')}>
          Set text
        </button>
        <button
          type="button"
          onClick={() =>
            setFields({
              text: 'Banana',
              checkboxwithvalue: 'hey',
              checkboxwithoutvalue: 'on',
              checkboxemptystring: '',
              select: '2',
            })
          }
        >
          Set all fields
        </button>
        <button
          type="button"
          onClick={() =>
            mergeFields({ text: 'Avocado', checkboxwithoutvalue: undefined, select: '1' })
          }
        >
          Merge fields
        </button>
      </>
    )
    const InputWithFields = withFields()(Input)
    return <InputWithFields />
  })
  .add('Elements', () => (
    <div>
      <A href="#" target="_blank">
        a
      </A>
      <br />
      <B>b</B>
      <Div>div</Div>
      <H1>h1</H1>
      <H2>h2</H2>
      <H3>h3</H3>
      <H4>h4</H4>
      <H5>h5</H5>
      <H6>h6</H6>
      <I>i</I>
      <El tag="ul">
        <Li>i</Li>
      </El>
      <P>p</P>
      <Span>span</Span>
      <br />
    </div>
  ))
  .add('Styled Elements', () => (
    <div>
      <Div light>light</Div>
      <Div fontWeightNormal>fontWeightNormal</Div>
      <Div bold>bold</Div>
      <Div bolder>bolder</Div>
      <Div italic>italic</Div>
      <Div noDecoration>noDecoration</Div>
      <Div underline>underline</Div>
      <Div m3>m3</Div>
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
