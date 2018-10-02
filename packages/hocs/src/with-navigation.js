// @flow

import { connect as withRedux } from 'react-redux'
import withRouter from 'react-router-dom/withRouter'
import withLifecycle from 'recompose/lifecycle'
import compose from 'recompose/compose'

let isRouterListening

const withNavigation = (navigationActionCreator: Function) => (Cmp: Function) =>
  compose(
    withRouter,
    withRedux(),
    withLifecycle({
      componentWillMount() {
        if (!isRouterListening) {
          this.props.history.listen(() => this.props.dispatch(navigationActionCreator()))
          isRouterListening = true
        }
      },
    }),
  )(Cmp)

export default withNavigation
