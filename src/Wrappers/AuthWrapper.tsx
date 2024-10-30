import Header from '@/shared/Header'
import { AuthWrapperProps } from '@/types/Index'
import React from 'react'

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <>
     <Header />
      {children}
    </>
  )
}

export default AuthWrapper
