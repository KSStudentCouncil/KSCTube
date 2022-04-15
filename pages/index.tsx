import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import Avatar from '../components/common/Avatar'
import { AuthContext } from '../components/context/auth'
// import { useUser } from '../hooks/useUser'

const Home: NextPage = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
      <div>
        <div>
          {user ? (
            <div className="flex items-center p-2">
              <Avatar name={user.uid} className={'pr-2'} />
              <div>{user.displayName}</div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <Link href={'/login'}>
          <button className="rounded-sm bg-blue-500 py-3 px-5 font-bold text-white">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
