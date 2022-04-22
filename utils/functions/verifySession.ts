import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import nookies from 'nookies'
import { firebaseAdmin } from '../firebase/admin/admin'

const redirectTop = {
  redirect: {
    destination: '/home',
    permanent: false,
  },
  props: {} as never,
}

const redirectLogin = {
  redirect: {
    destination: '/login',
    permanent: false,
  },
  props: {} as never,
}

const empty = {
  props: {},
}

const verifySession = async (ctx: GetServerSidePropsContext) => {
  const notNeedAuth = ['/']
  const unauthenticated = ['/login']
  const cookies = nookies.get(ctx)
  const url = ctx.resolvedUrl || ''

  const session = cookies.session

  if (notNeedAuth.includes(url)) {
    return empty
  }

  if (unauthenticated.includes(url)) {
    if (session) {
      // ログイン用のリンクだけどすでにセッションあるのでトップへ
      return redirectTop
    } else {
      // セッションないのでそのままログインしてもらう
      return empty
    }
  }

  if (!session) {
    return redirectLogin
  }

  try {
    await firebaseAdmin.auth().verifyIdToken(session, true)
    // セッションが有効なのでそのまま通過
    return empty
  } catch (err) {
    //   セッションが無効なのでログインページへ
    // console.error(err)
    return redirectLogin
  }
}

export default verifySession
