import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useUser } from '../../../hooks/useUser'

const SignInMethods = () => {
  const [loading, setLoading] = useState(false)

  const { signInWithPopup } = useUser()

  const { push } = useRouter()

  return (
    <div className={`pb-30 m-auto`}>
      <Link href={'/'}>
        <button className="group flex items-center py-2 pr-3 opacity-75">
          <Icon icon={'charm:chevron-left'} className={'h-6 w-6'} />
          <span>戻る</span>
        </button>
      </Link>
      <main className="min-h-96 w-96 rounded-md bg-white shadow-2xl shadow-blue-300/50 dark:bg-slate-800 dark:shadow-blue-300/10  ">
        <div className="p-12">
          <div>
            <Link href="/">
              <a className="opacity-75 hover:border-b">海城部活紹介動画</a>
            </Link>
            <h1 className="text-xl font-bold">ログイン</h1>
          </div>

          <div className="my-12 flex flex-col gap-y-4">
            <button
              className={`w-full rounded-sm border-2 border-blue-500 py-2 font-bold  transition-all duration-200 hover:shadow-sm hover:shadow-blue-500/10 ${
                loading
                  ? 'cursor-wait bg-blue-500 text-white  opacity-50'
                  : 'text-blue-500 hover:bg-blue-500 hover:text-white'
              }`}
              onClick={async () => {
                setLoading(true)
                await signInWithPopup().then(() => {
                  push('/home')
                })
                setLoading(false)
              }}
            >
              Microsoft でログイン (推奨)
            </button>
            <Link href={'/login/freshman'}>
              <button
                className={`w-full rounded-sm border-2 border-gray-500 py-2 font-bold  transition-all duration-200 hover:shadow-sm hover:shadow-blue-500/10 ${
                  loading
                    ? 'cursor-wait bg-gray-500 text-white  opacity-50'
                    : 'text-gray-500 hover:bg-gray-500 hover:text-white'
                }`}
              >
                生徒番号 でログイン
              </button>
            </Link>
          </div>

          <div className="text-sm opacity-75">
            <p className="">
              Microsoft アカウントがわからない場合は先生に聞くか、代わりに
              <span className="mr-1 text-blue-500 dark:text-blue-500">
                <Link href={'/login/freshman'}>生徒番号でログイン</Link>
              </span>
              することができます。
            </p>
            <p>
              また、保護者の方はお子様の生徒番号を使ってログインすることができます。
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignInMethods
