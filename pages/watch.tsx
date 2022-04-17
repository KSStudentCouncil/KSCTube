import { NextPageWithLayout } from 'next'
import { useContext } from 'react'
import { AuthContext } from '../components/context/auth'

const Page: NextPageWithLayout = () => {
  const { user } = useContext(AuthContext)

  return <div className="">watch!</div>
}

export default Page
