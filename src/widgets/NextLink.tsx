import { LinkProps } from '@/types/Index'
import Link from 'next/link'
import React from 'react'

const NextLink = ({title, className, target, href, icon}: LinkProps) => {
  return (
    <Link href={href} className={`flex items-center gap-x-2 justify-start px-5 py-2 ${className}`} target={target}>
      {icon}
      {title}
    </Link>
  )
}

export default NextLink
