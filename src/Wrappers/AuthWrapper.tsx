import Footer from '@/shared/Footer'
import Header from '@/shared/Header'
import { AuthWrapperProps } from '@/types/Index'
import React from 'react'

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children, parentClassName }) => {
  return (
    <>
      <Header />
      <div className={`min-h-screen ${parentClassName}`}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default AuthWrapper
