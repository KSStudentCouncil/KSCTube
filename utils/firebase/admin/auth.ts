import { getAuth } from 'firebase-admin/auth'
import { firebaseAdmin } from './admin'
import nookies from 'nookies'
import { GetServerSidePropsContext } from 'next'

export const auth = getAuth()

/**
 *
 * @param ctx
 * @returns 有効であればuid、無効であればnull
 */
export const checkSession = async (
  ctx: GetServerSidePropsContext
): Promise<string | null> => {
  const session = nookies.get(ctx).session

  if (!session) {
    return null
  }

  return await firebaseAdmin
    .auth()
    .verifyIdToken(session, true)
    .then((decoded) => {
      return decoded.uid
    })
    .catch(() => {
      return null
    })
}
