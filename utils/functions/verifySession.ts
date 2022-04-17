import { GetServerSidePropsContext } from 'next'
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

  if (notNeedAuth.includes(url)) {
    return empty
  }

  if (unauthenticated.includes(url)) {
    if (cookies.session) {
      // ログイン用のリンクだけどすでにセッションあるのでトップへ
      return redirectTop
    } else {
      // セッションないのでそのままログインしてもらう
      return empty
    }
  }

  try {
    await firebaseAdmin.auth().verifyIdToken(cookies.session)
    // セッションが有効なのでそのまま通過
    return empty
  } catch (err) {
    //   セッションが無効なのでログインページへ
    // console.error(err)
    return redirectLogin
  }
}

export default verifySession