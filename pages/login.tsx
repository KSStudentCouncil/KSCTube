import { NextPageWithLayout } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useUser } from '../hooks/useUser'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SignIn from '../components/ui/SignIn'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <SignIn redirectTo={'/home'} />
    </>
  )
}

export default Page
