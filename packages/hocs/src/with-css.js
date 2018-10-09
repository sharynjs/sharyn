// @flow

import withStyles from '@material-ui/core/styles/withStyles'
import compose from 'recompose/compose'
import renameProp from 'recompose/renameProp'

const withCss = (params: any) => (BaseCmp: Function) =>
  compose(
    withStyles(params),
    renameProp('classes', 'css'),
  )(BaseCmp)

export default withCss
