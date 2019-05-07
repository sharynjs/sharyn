// @flow

import React from 'react'

import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

const styles = {
  link: {
    textDecoration: 'none',
    color: '#ddd',
    '&:hover': {
      color: '#ccc',
      textDecoration: 'none',
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
    <Button color="primary" variant="contained">
      {label}
    </Button>
  </div>
)

const HeroButtonJSX = ({
  classes,
  dest,
  newTab,
  hardLink,
  icon,
  label,
  ...rest
}: {
  dest: any,
  hardLink?: boolean,
  newTab?: boolean,
  icon: Function,
  label: string,
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
      <a {...rest} {...aProps}>
        <Inner {...{ icon, label, classes }} />
      </a>
    )
  }

  return (
    <Link {...rest} to={dest} className={classes.link}>
      <Inner {...{ icon, label, classes }} />
    </Link>
  )
}

const HeroButton = withStyles(styles)(HeroButtonJSX)

export default HeroButton
