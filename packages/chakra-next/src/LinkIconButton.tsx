import React from 'react'

import { IconButton, IconButtonProps } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'

interface Props {
  href: string
  nextLinkProps?: Omit<LinkProps, 'href' | 'passHref' | 'as'>
}

export type LinkIconButtonProps = Props & IconButtonProps

const LinkIconButton = ({ href, nextLinkProps, children, ...iconButtonProps }: LinkIconButtonProps) => (
  <Link href={href} passHref {...nextLinkProps}>
    <IconButton as="a" {...iconButtonProps}>
      {children}
    </IconButton>
  </Link>
)

export default LinkIconButton
