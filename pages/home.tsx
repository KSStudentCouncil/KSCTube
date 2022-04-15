import type { NextPageWithLayout } from 'next'
import { useContext } from 'react'
import { AuthContext } from '../components/context/auth'
import Header from '../components/ui/Header'
import SignIn from '../components/ui/SignIn'

const Page: NextPageWithLayout = () => {
  const { user } = useContext(AuthContext)

  // この方法が良いのかはよくわからないが、ログインしてなかったらその場でログインのビューを出す。ログインページに飛ばした方がいいのか？
  // 正しいやり方を知っている人はぜひ生徒会室に殴り込みに来てください。
  if (!user) {
    return <SignIn redirectTo="/home" />
  }

  return (
    <div className="h-screen">
      <Header />
      <div>hi</div>
    </div>
  )
}

export default Page
