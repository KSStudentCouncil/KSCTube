import type { NextPageWithLayout } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../components/context/auth'
// import { PlayerProvider } from '../components/context/player'
// import Header from '../components/ui/Header'
// import SignIn from '../components/ui/SignIn'
import PlayerLayout from '../layout/player'

const Page: NextPageWithLayout = () => {
  const { user } = useContext(AuthContext)
  const { push } = useRouter()

  // useEffect(() => {
  //   // // この方法が良いのかはよくわからないが、ログインしてなかったらその場でログインのビューを出す。ログインページに飛ばした方がいいのか？
  //   // // 正しいやり方を知っている人はぜひ生徒会室に殴り込みに来てください。
  //   if (!user) {
  //     push('/login')
  //     //   return <SignIn redirectTo="/home" />
  //   }
  // }, [])

  return (
    <PlayerLayout>
      <div className="h-screen w-full bg-slate-50 dark:bg-slate-900">
        <div>homeだよ</div>
      </div>
    </PlayerLayout>
  )
}

export default Page
