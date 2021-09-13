import React from 'react'

import { Button, ButtonProps } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'

interface Props {
  href: string
  nextLinkProps?: LinkProps
}

export type LinkButtonProps = Props & ButtonProps

const LinkButton = ({ href, nextLinkProps, children, ...buttonProps }: LinkButtonProps) => (
  <Link href={href} passHref {...nextLinkProps}>
    <Button as="a" {...buttonProps}>
      {children}
    </Button>
  </Link>
)

export default LinkButton
