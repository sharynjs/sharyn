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
    if (!this.props.isServerRender) {
      if (!configuredFetchPageThunk) {
        throw Error('You must configure a fetchPageThunk with configureWithClientMainQuery')
      }
      const { dispatch, route, fetchPageOptions } = this.props
      if (route.mainQuery) {
        const { query, variables, mapRespData } = route.mainQuery
        dispatch(
          configuredFetchPageThunk({
            query,
            variables:
              variables instanceof Function ? variables(this.props.match.params) : variables,
            mapRespData,
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
    connect(({ env }) => ({ isServerRender: env.isServerRender })),
    withLifecycle(lifecycle),
    mapProps((props: Object) => {
      const newProps = { ...props }
      delete newProps.fetchPageOptions
      return newProps
    }),
  )

export default withClientMainQuery
