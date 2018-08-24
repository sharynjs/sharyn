// @flow

/* eslint-disable import/no-extraneous-dependencies */

// flow-disable-next-line
import { connect } from 'react-redux'
import withLifecycle from 'recompose/lifecycle'
import compose from 'recompose/compose'
import withProps from 'recompose/withProps'
import mapProps from 'recompose/mapProps'

const lifecycle = {
  componentDidMount() {
    const { mainQuery: query, mainQueryMapResp: mapRespData } = this.props.route
    this.props.dispatch(
      this.props.fetchPageData({ query, mapRespData, variables: this.props.variables }),
    )
  },
}

const withInitialData = (fetchPageData_: Function) =>
  compose(
    connect(() => ({})),
    // flow-disable-next-line
    withProps(({ route, match }) => ({
      variables: route.mainQueryMapParams ? route.mainQueryMapParams(match.params) : match.params,
      fetchPageData: fetchPageData_,
    })),
    withLifecycle(lifecycle),
    mapProps(props => {
      const { variables, fetchPageData, ...rest } = props
      return rest
    }),
  )

export default withInitialData
