import React from 'react'

import { MenuItem, MenuItemProps } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'

interface Props {
  href: string
  nextLinkProps?: LinkProps
}

const LinkMenuItem = ({
  href,
  nextLinkProps,
  children,
  ...menuItemProps
}: Props & MenuItemProps) => (
  <Link href={href} passHref {...nextLinkProps}>
    <MenuItem as="a" {...menuItemProps}>
      {children}
    </MenuItem>
  </Link>
)

export default LinkMenuItem
