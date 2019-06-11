// @flow

import { connect as withRedux } from 'react-redux'
import withRouter from 'react-router-dom/withRouter'
import withLifecycle from 'recompose/lifecycle'
import compose from 'recompose/compose'

let isRouterListening

const withNavigation = (
  navigationActionCreator: Function,
  initialNavigationActionCreator?: Function,
) => (Cmp: Function) =>
  compose(
    withRouter,
    withRedux(),
    withLifecycle({
      componentWillMount() {
        if (!isRouterListening) {
          this.props.history.listen((location, action) => {
            this.props.dispatch(
              navigationActionCreator({ location, action, match: this.props.match }),
            )
          })
          if (initialNavigationActionCreator) {
            this.props.dispatch(
              initialNavigationActionCreator({
                location: this.props.history.location,
                match: this.props.match,
              }),
            )
          }
          isRouterListening = true
        }
      },
    }),
  )(Cmp)

export default withNavigation
