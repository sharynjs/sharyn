import React from 'react'

import { MenuItem, MenuItemProps } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'

interface Props {
  href: string
  nextLinkProps?: Omit<LinkProps, 'href' | 'passHref' | 'as'>
}

export type LinkMenuItemProps = Props & MenuItemProps

const LinkMenuItem = ({ href, nextLinkProps, children, ...menuItemProps }: LinkMenuItemProps) => (
  <Link href={href} passHref {...nextLinkProps}>
    <MenuItem as="a" {...menuItemProps}>
      {children}
    </MenuItem>
  </Link>
)

export default LinkMenuItem
