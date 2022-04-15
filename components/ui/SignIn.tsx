import { NextPageWithLayout } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useUser } from '../../hooks/useUser'
import { useRouter } from 'next/router'
import { ComponentProps, useContext, useState } from 'react'
import { AuthContext } from '../context/auth'
import Alert from './Alert'

type Props = {
  redirectTo?: string
} & ComponentProps<'div'>

const SignIn = ({ redirectTo, ...props }: Props) => {
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)

  const { signInWithPopup } = useUser()
  const { push } = useRouter()

  return (
    <div {...props} className="">
      {user ? (
        <div className="absolute z-50 w-full p-8">
          <div className="flex">
            <div className="w-full" />
            <Alert
              colorScheme="info"
              title="Info"
              message="すでにログイン済みです"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex h-screen">
        <div className={`pb-30 m-auto`}>
          <Link href={'/'}>
            <button className="group flex items-center py-2 pr-3 opacity-75">
              <Icon icon={'charm:chevron-left'} className={'h-6 w-6'} />
              <span>戻る</span>
            </button>
          </Link>

          <main className="h-96 w-96 rounded-md bg-white shadow-2xl shadow-blue-300/50 dark:bg-slate-800 dark:shadow-blue-300/10  ">
            <div className="p-12">
              <div>
                <p className="opacity-75">海城部活紹介動画</p>
                <h1 className="text-xl font-bold">ログイン</h1>
              </div>

              <div className="my-16">
                <button
                  className={`w-full rounded-sm border-2 border-blue-500 py-2 font-bold  transition-all duration-200 hover:shadow-sm hover:shadow-blue-500/10 ${
                    loading
                      ? 'cursor-wait bg-blue-500 text-white  opacity-50'
                      : 'text-blue-500 hover:bg-blue-500 hover:text-white'
                  }`}
                  onClick={async () => {
                    setLoading(true)
                    await signInWithPopup()

                    setLoading(false)

                    // ログイン
                    push(redirectTo ?? '/home')
                  }}
                >
                  Microsoft でログイン
                </button>
              </div>

              <div>
                <p className=" text-sm opacity-75">
                  <span className="mr-1 text-blue-500 dark:text-blue-500">
                    <Link href={'/'}>パスワードを忘れた</Link>
                  </span>
                  場合はこちら
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default SignIn
