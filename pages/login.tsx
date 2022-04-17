import { NextPageWithLayout } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import SignIn from '../components/ui/SignIn'
import { AuthContext } from '../components/context/auth'

const Page: NextPageWithLayout = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <SignIn redirectTo={'/home'} />
    </>
  )
}

export default Page
