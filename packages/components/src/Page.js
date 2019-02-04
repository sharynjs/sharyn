// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'
// flow-disable-next-line
import Paper from '@material-ui/core/Paper'

const styles = ({ breakpoints }) => ({
  // paddingLeft 39px and 31px are for alignment with the burger icon
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    padding: '30px 39px 0',
    [breakpoints.up('xs')]: { padding: '30px 39px 0' }, // Make 30 customizable when props are supported
    [breakpoints.down('xs')]: { padding: 0 },
  },
  containerMiddle: { paddingTop: 0 },
  paper: {
    width: '100%',
    margin: '0 auto',
    [breakpoints.down('xs')]: {
      minHeight: '100%',
      boxShadow: 'none',
      padding: '25px 31px 0', // Make 25 customizable when props are supported
    },
  },
  paperMiddle: {
    width: 'auto',
    maxWidth: '100%',
    margin: 'auto',
    [breakpoints.down('xs')]: { width: '100%' },
  },
  paperPadding: { padding: 30 }, // Make it customizable when props are supported
  noPaper: { background: 'transparent', boxShadow: 'none' },
})

type Props = {
  children?: any,
  classes: Object,
  noPaper?: boolean,
  noPadding?: boolean,
  containerClass?: string,
  paperClass?: string,
  maxWidth?: any,
  middle?: boolean,
}

const PageJSX = ({
  children,
  classes,
  middle,
  noPadding,
  noPaper,
  containerClass = '',
  paperClass = '',
  maxWidth = 1012,
}: Props) => (
  <div
    className={`${classes.container} ${containerClass} ${middle ? classes.containerMiddle : ''}`}
  >
    <Paper
      className={`${classes.paper} ${paperClass} ${noPaper ? classes.noPaper : ''} ${
        noPadding ? '' : classes.paperPadding
      } ${middle ? classes.paperMiddle : ''}`}
      style={{ maxWidth }}
    >
      {children}
    </Paper>
  </div>
)

const Page = withStyles(styles)(PageJSX)

export default Page
