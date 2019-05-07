// @flow

/* eslint-disable import/no-extraneous-dependencies, no-console, no-alert */

import React from 'react'

import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import { boolean, number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import DelayedProgress from '../components/DelayedProgress'
import DrawerItem from '../components/DrawerItem'
import FontWeight from '../components/FontWeight'
import HeroButton from '../components/HeroButton'
import Page from '../components/Page'
import ProgressButton from '../components/ProgressButton'
import { RefreshButtonCmp } from '../components/RefreshButton'
import StoryHost from '../components/StoryHost'
import A from '../components/A'
import B from '../components/B'
import Div from '../components/Div'
import El from '../components/El'
import H1 from '../components/H1'
import H2 from '../components/H2'
import H3 from '../components/H3'
import H4 from '../components/H4'
import H5 from '../components/H5'
import H6 from '../components/H6'
import I from '../components/I'
import Li from '../components/Li'
import P from '../components/P'
import Span from '../components/Span'
import Ul from '../components/Ul'
import { clearfix, middle } from '../css/util'
import withFields from '../hocs/withFields'
import withFilePickers from '../hocs/withFilePickers'
import HideOnScrollView from './hideOnScrollView'
import NotificationsView from './notifications-view'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: 'White', value: '#fff', default: true },
      { name: 'Gray', value: '#f2f2f2' },
    ],
  })
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
  .add('HOC/withFilePickers', () => {
    const Input = ({ filePickers, filePickerHandler }: Object) => (
      <>
        <input type="file" name="foo" onChange={filePickerHandler} />
        <input type="file" name="bar" onChange={filePickerHandler} />
        <button type="button" onClick={() => console.log(filePickers)}>
          Log fields
        </button>
      </>
    )
    const InputWithFilePickers = withFilePickers()(Input)
    return <InputWithFilePickers />
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
      <Ul>
        <Li>i</Li>
      </Ul>
      <El tag="blockquote">Blockquote</El>
      <El component={Button} color="primary" variant="contained">
        Button
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
  .addParameters({
    backgrounds: [
      { name: 'White', value: '#fff', default: true },
      { name: 'Gray', value: '#f2f2f2' },
    ],
  })
  .add('StoryHost', () => <StoryHost>StoryHost</StoryHost>)
  .add('StoryHost Border', () => <StoryHost border>StoryHost</StoryHost>)
  .add('StoryHost Border/Dimensions', () => {
    const border = boolean('Border', true)
    const dimensions = boolean('Dimensions', true)
    const width = number('Width', 100)
    const height = number('height', 30)

    return (
      <StoryHost {...{ border, dimensions }}>
        <div style={{ width, height }}>StoryHost</div>
      </StoryHost>
    )
  })
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
