// @flow

/* eslint-disable import/no-extraneous-dependencies */

// flow-disable-next-line
import { connect } from 'react-redux'
import withLifecycle from 'recompose/lifecycle'
import compose from 'recompose/compose'

let configuredFetchPageThunk

export const configureWithClientMainQuery = (fetchPageThunk: Function) => {
  configuredFetchPageThunk = fetchPageThunk
}

const lifecycle = {
  componentDidMount() {
    if (!configuredFetchPageThunk) {
      throw Error('You must configure a fetchPageThunk with configureWithClientMainQuery')
    }
    const { dispatch, route } = this.props
    if (route.mainQuery) {
      const urlParams = this.props.match.params
      const { query, mapUrlParams, mapResp } = route.mainQuery
      dispatch(configuredFetchPageThunk({ query, urlParams, mapUrlParams, mapResp }))
    }
  },
}

const withClientMainQuery = compose(
  connect(() => ({})),
  withLifecycle(lifecycle),
)

export default withClientMainQuery
