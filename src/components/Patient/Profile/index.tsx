import PageLoader from '@/widgets/PageLoader'
import AuthWrapper from '@/Wrappers/AuthWrapper'
import React from 'react'

const Profile = () => {
  return (
    <AuthWrapper>
      <span>Welcome Profile Patient</span>
      <PageLoader />
    </AuthWrapper>
  )
}

export default Profile
