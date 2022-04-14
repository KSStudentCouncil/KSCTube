import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useUser } from '../hooks/useUser'

const Home: NextPage = () => {
  const { signInWithPopup, user } = useUser()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div>
        <div>{user ? <div>User: {user.displayName}</div> : <></>}</div>
        <button
          className="bg-blue-500 py-3 px-5 font-bold text-white"
          onClick={() => {
            signInWithPopup()
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Home
