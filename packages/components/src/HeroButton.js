// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { Link } from 'react-router-dom'
// flow-disable-next-line
import Button from '@material-ui/core/Button'
// flow-disable-next-line
import { withStyles } from '@material-ui/core/styles'

const styles = {
  link: {
    textDecoration: 'none',
    color: '#ddd',
    '&:hover': {
      color: '#ccc',
    },
  },
  container: { textAlign: 'center' },
  icon: { width: 100, height: 100 },
}

const Inner = ({
  classes,
  label,
  icon: Icon,
}: {
  classes: Object,
  label: string,
  icon: Function,
}) => (
  <div className={classes.container}>
    <Icon className={classes.icon} />
    <br />
    <Button color="primary" variant="raised">
      {label}
    </Button>
  </div>
)

const HeroButtonJSX = ({
  classes,
  dest,
  newTab,
  hardLink,
  ...rest
}: {
  dest: any,
  hardLink?: boolean,
  newTab?: boolean,
  icon: Function,
  classes: Object,
  label: string,
}) => {
  if (newTab || hardLink) {
    const aProps: Object = {
      href: dest,
      className: classes.link,
    }
    if (newTab) {
      aProps.target = '_blank'
    }
    return (
      <a {...aProps}>
        <Inner classes={classes} {...rest} />
      </a>
    )
  }

  return (
    <Link to={dest} className={classes.link}>
      <Inner classes={classes} {...rest} />
    </Link>
  )
}

const HeroButton = withStyles(styles)(HeroButtonJSX)

export default HeroButton
