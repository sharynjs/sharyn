// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
// flow-disable-next-line
import { withStyles } from '@material-ui/core/styles'
// flow-disable-next-line
import Paper from '@material-ui/core/Paper'

const styles = ({ breakpoints }) => ({
  // 39px and 31px are for alignment with the burger icon
  container: { display: 'flex', alignItems: 'flex-start', height: '100%', padding: '30px 39px 0' }, // Make paddingTop customizable when props land in withStyles
  containerMiddle: { paddingTop: 0 },
  paper: { width: '100%', margin: '0 auto' },
  paperMiddle: { maxWidth: '100%', width: 'auto', margin: 'auto' },
  paperPadding: { padding: 30 }, // Make this customizable when props land in withStyles
  noPaper: { background: 'transparent', boxShadow: 'none' },
  [`@media (max-width: ${breakpoints.values.sm - 1}px)`]: {
    container: { padding: '0' },
    paper: { height: '100%', width: '100%', boxShadow: 'none', padding: '25px 31px 0' }, // Make paddingTop customizable when props land in withStyles
  },
})

type Props = {
  children: any,
  classes: Object,
  noPaper?: boolean,
  noPadding?: boolean,
  containerClass?: string,
  paperClass?: string,
  maxWidth?: number,
  middle?: boolean,
}

const PaperPageJSX = ({
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

const PaperPage = withStyles(styles)(PaperPageJSX)

export default PaperPage
