// @flow

import React from 'react'

import Button from '@material-ui/core/Button'
import Progress from '@material-ui/core/CircularProgress'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  progressButtonWrapper: { position: 'relative', display: 'inline-block' },
  progressButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -14,
    marginLeft: -14,
  },
}

type Props = { classes: Object, children: any, isLoading?: boolean, isOnline?: boolean }

const ProgressButtonJSX = ({
  classes: css,
  isLoading,
  isOnline = true,
  children,
  ...rest
}: Props) => (
  <span className={css.progressButtonWrapper} style={{ verticalAlign: 'bottom' }}>
    <Button
      disabled={isLoading || !isOnline}
      variant="contained"
      color="primary"
      type="submit"
      {...rest}
    >
      {children}
    </Button>
    {isLoading && <Progress className={css.progressButton} size={28} thickness={4} />}
  </span>
)

const ProgressButton = withStyles(styles)(ProgressButtonJSX)

export default ProgressButton
