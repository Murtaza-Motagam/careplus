import { LinkProps } from '@/types/Index'
import Link from 'next/link'
import React from 'react'

const NextLink = ({title, className, target, href}: LinkProps) => {
  return (
    <Link href={href} classsName={className} target={target}>{title}</Link>
  )
}

export default NextLink
