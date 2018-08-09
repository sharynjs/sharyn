// @flow

import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PageView from './PageView'
import PageMiddleView from './PageMiddleView'
import HeroButtonView from './HeroButtonView'
import DrawerItemView from './DrawerItemView'
import NavListView from './NavListView'
import hideOnScrollView from './hideOnScrollView'
import NotificationsView from './NotificationsView'

const App = () => (
  <div style={{ height: '100%' }}>
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
      html {
      box-sizing: border-box;
      height: 100%;
      background: #f2f2f2;
      font-family: Roboto, Helvetica, Arial, sans-serif
    }

    body {
      height: 100%;
      margin: 0;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit
    }

    #app {
      height: 100%;
      display: flex;
      flex-direction: column;
      height: 100%
    }
    `,
      }}
    />
    <Router>
      <Fragment>
        <div
          style={{
            borderTop: '1px solid black',
            position: 'fixed',
            bottom: 0,
            background: 'white',
            width: '100%',
          }}
        >
          <Link to="/">Home</Link>
          {' – '}
          <Link to="/Page">Page</Link>
          {' – '}
          <Link to="/PageMiddle">Page Middle</Link>
          {' – '}
          <Link to="/HeroButton">HeroButton</Link>
          {' – '}
          <Link to="/DrawerItem">DrawerItem</Link>
          {' – '}
          <Link to="/NavList">NavList</Link>
          {' – '}
          <Link to="/Notifications">Notifications</Link>
          {' – '}
          <Link to="/hideOnScroll">hideOnScroll</Link>
        </div>
        <div style={{ height: '100%' }}>
          <Route exact path="/" />
          <Route path="/Page" component={PageView} />
          <Route path="/PageMiddle" component={PageMiddleView} />
          <Route path="/HeroButton" component={HeroButtonView} />
          <Route path="/DrawerItem" component={DrawerItemView} />
          <Route path="/NavList" component={NavListView} />
          <Route path="/Notifications" component={NotificationsView} />
          <Route path="/hideOnScroll" component={hideOnScrollView} />
        </div>
      </Fragment>
    </Router>
  </div>
)

// flow-disable-next-line
render(<App />, document.getElementById('app'))
