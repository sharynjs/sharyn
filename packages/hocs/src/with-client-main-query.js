// @flow

/* eslint-disable import/no-extraneous-dependencies */

// flow-disable-next-line
import { connect } from 'react-redux'
import withLifecycle from 'recompose/lifecycle'
import compose from 'recompose/compose'
import mapProps from 'recompose/mapProps'
import withProps from 'recompose/withProps'

let configuredFetchPageThunk

export const configureWithClientMainQuery = (fetchPageThunk: Function) => {
  configuredFetchPageThunk = fetchPageThunk
}

const lifecycle = {
  componentDidMount() {
    if (!this.props.isFirstRender) {
      if (!configuredFetchPageThunk) {
        throw Error('You must configure a fetchPageThunk with configureWithClientMainQuery')
      }
      const { dispatch, route, fetchPageOptions } = this.props
      if (route.mainQuery) {
        const urlParams = this.props.match.params
        const { query, mapUrlParams, mapResp } = route.mainQuery
        dispatch(
          configuredFetchPageThunk({
            query,
            urlParams,
            mapUrlParams,
            mapResp,
            ...fetchPageOptions,
          }),
        )
      }
    }
  },
}

const withClientMainQuery = (fetchPageOptions?: Object) =>
  compose(
    withProps(props => ({
      fetchPageOptions:
        fetchPageOptions instanceof Function ? fetchPageOptions(props) : fetchPageOptions,
    })),
    connect(({ env }) => ({ isFirstRender: env.isFirstRender })),
    withLifecycle(lifecycle),
    mapProps((props: Object) => {
      const newProps = { ...props }
      delete newProps.fetchPageOptions
      return newProps
    }),
  )

export default withClientMainQuery
