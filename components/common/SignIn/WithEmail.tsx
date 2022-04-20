import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useUser } from '../../../hooks/useUser'
import Input from '../../ui/Form/Input'

const SignInWithEmail = () => {
  const [loading, setLoading] = useState(false)
  const [studentNumber, setStudentNumber] = useState('')
  const [codeNumber, setCodeNumber] = useState('')

  const { signInWithStudentNumberAndCodeNumber } = useUser()

  const { reload } = useRouter()

  const isSubmitDisabled =
    loading || studentNumber.length !== 8 || codeNumber.length !== 4

  return (
    <main className="min-h-96 w-96 rounded-md bg-white shadow-2xl shadow-blue-300/50 dark:bg-slate-800 dark:shadow-blue-300/10  ">
      <div className="p-12">
        <div>
          <p className="opacity-75">海城部活紹介動画</p>
          <h1 className="text-xl font-bold">生徒番号でログイン</h1>
        </div>

        <form
          className="flex flex-col gap-y-4 py-8"
          onSubmit={async (e) => {
            e.preventDefault()
            setLoading(true)
            await signInWithStudentNumberAndCodeNumber(
              studentNumber,
              codeNumber
            )
            setLoading(false)
          }}
        >
          <div>
            <label className="text-gray-700 dark:text-gray-200">生徒番号</label>
            <Input
              autoFocus
              name="studentNumber"
              placeholder="12810999"
              onChange={(e) => {
                setStudentNumber(e.target.value)
              }}
            />
          </div>

          <div>
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
          </div>

          <button
            className={`w-full rounded-sm border-2 border-blue-500 bg-blue-500 py-2 font-bold text-white  transition-all duration-200 ${
              isSubmitDisabled
                ? 'cursor-not-allowed opacity-50'
                : 'hover:border-blue-400  hover:shadow-sm hover:shadow-blue-500/10'
            } `}
            type="submit"
            disabled={isSubmitDisabled}
          >
            ログイン/サインアップ
          </button>
        </form>

        <div className="my-2">
          <p className=" text-sm opacity-75">
            <span className="mr-1 text-blue-500 dark:text-blue-500">
              <Link href={'/login/forget'}>パスワードを忘れた</Link>
            </span>
            場合はこちら
          </p>
        </div>
      </div>
    </main>
  )
}

export default SignInWithEmail
