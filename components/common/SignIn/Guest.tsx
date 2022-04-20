import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useUser } from '../../../hooks/useUser'
import Alert from '../../ui/Alert'
import Input from '../../ui/Form/Input'

const SignInWithGuest = () => {
  const [loading, setLoading] = useState(false)
  const [studentNumber, setStudentNumber] = useState('')
  const [codeNumber, setCodeNumber] = useState('')

  const { signInWithGuest, error } = useUser()

  const isSubmitDisabled = studentNumber.length !== 8 //|| codeNumber.length !== 4

  return (
    <div className={`pb-30 m-auto`}>
      <Link href="/login">
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
            <h1 className="text-xl font-bold">生徒番号でログイン</h1>
          </div>

          <form
            className="flex flex-col gap-y-4 py-8"
            onSubmit={async (e) => {
              e.preventDefault()
              setLoading(true)
              await signInWithGuest(studentNumber)
              setLoading(false)
            }}
          >
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                生徒番号
              </label>
              <Input
                autoFocus
                name="studentNumber"
                placeholder="12810999"
                onChange={(e) => {
                  setStudentNumber(e.target.value)
                }}
              />
            </div>

            {/* <div>
              <label className="text-gray-700 dark:text-gray-200">
                コード番号
              </label>
              <Input
                name="codeNumber"
                placeholder="1944"
                onChange={(e) => {
                  setCodeNumber(e.target.value)
                }}
              />
            </div> */}

            <button
              className={`w-full rounded-sm border-2 border-blue-500 bg-blue-500 py-2 font-bold text-white  transition-all duration-200 ${
                isSubmitDisabled
                  ? 'cursor-not-allowed opacity-50'
                  : 'hover:border-blue-400  hover:shadow-sm hover:shadow-blue-500/10'
              } ${loading ? 'cursor-wait opacity-50' : ''}`}
              type="submit"
              disabled={loading || isSubmitDisabled}
            >
              ログイン
            </button>
          </form>

          <div className="my-2 text-sm opacity-75">
            <h3 className="text-md font-semibold">生徒番号とは？</h3>
            <p>
              生徒番号は、生徒証の右上に記載されている
              「No.12910123」のような8桁の数字のことです。
            </p>
            <p>
              Microsoft アカウントのメールアドレスや Apple ID
              にも含まれています。
            </p>
          </div>
        </div>
      </main>

      {error ? (
        <div className="my-6">
          <Alert colorScheme="error" title="エラー" message={error} />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default SignInWithGuest
