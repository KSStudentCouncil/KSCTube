import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  OAuthProvider,
  signOut,
  User,
  setPersistence,
  browserSessionPersistence,
  getIdToken,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  AuthError,
  AuthErrorCodes,
  signInAnonymously,
} from 'firebase/auth'
// import { useRouter } from 'next/router'
import { auth, provider } from '../utils/firebase/auth'
// import { storage, UsersRef } from '../utils/firebase/storage'
import { MicrosoftClient } from '../utils/microsoft/client'
import { updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  const { push } = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      unsubscribe()
    })
  })

  const _signInWithPopup = async () => {
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        // User is signed in.
        // IdP data available in result.additionalUserInfo.profile.
        if (!result) {
          return
        }

        // Get the OAuth access token and ID Token
        const credential = OAuthProvider.credentialFromResult(result)
        if (!credential) {
          throw new Error('No credential')
        }
        const accessToken = credential.accessToken
        // const idToken = credential.idToken

        if (!accessToken) {
          throw new Error('Failed to sign in. No access token')
        }

        if (!auth.currentUser) {
          throw new Error('Failed to sign in. No current user')
        }

        const user = auth.currentUser
        if (!user) {
          throw new Error('Failed to sign in. No user')
        }

        await setupUserData()

        // TODo: だるいのでSSRしない。セッション管理とかしない。
        // if (!idToken) {
        //   throw new Error('Failed to get idToken')
        // } else {
        //   // Cookieを保存
        //   fetch('/api/session', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ idToken: idToken }),
        //   })
        // }

        // TODO: 後回し。プロフ画像を上げる。
        // const client = new MicrosoftClient(accessToken)
        // const photo = await client.getUserProfilePhoto()

        // if (!photo) {
        //   console.error('Failed to get photo')
        //   return null
        // } else {
        //   await fetch('/api/user/profilePhoto', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       photo: photo,
        //     }),
        //   })
        // }
      })
      .catch((error) => {
        // Handle error.
        console.error(error)
      })
  }

  // const signInWithStudentNumberAndCodeNumber = async (
  //   studentNumber: string,
  //   codeNumber: string
  // ) => {
  //   setError(null)

  //   // 12810XXX
  //   if (!studentNumber.match(/12810\d{3}$/)) {
  //     setError('生徒番号が正しくありません。')
  //     return
  //   }

  //   const domain = process.env.NEXT_PUBLIC_EMAIL_DOMAIN
  //   const email = studentNumber + '@' + domain

  //   const passwordSalt = process.env.NEXT_PUBLIC_PASSWORD_SALT
  //   const password = codeNumber + passwordSalt

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(() => {
  //       push('/home')
  //     })
  //     .catch(async (error) => {
  //       const errorCode = error.code
  //       switch (errorCode) {
  //         case AuthErrorCodes.INVALID_PASSWORD: {
  //           setError('生徒番号、又はコード番号が間違っています。')
  //           break
  //         }
  //         case AuthErrorCodes.USER_DELETED: {
  //           const credential = await createUserWithEmailAndPassword(
  //             auth,
  //             email,
  //             password
  //           )
  //           await updateProfile(credential.user, {
  //             displayName: `生徒番号 ${studentNumber}`,
  //           })

  //           signInWithEmailAndPassword(auth, email, password).then(() => {
  //             push('/home')
  //           })
  //           break
  //         }
  //       }
  //     })
  // }

  const signInWithGuest = async (
    /**認証に使う個人のコード */
    code: string
  ) => {
    setError(null)

    if (!code.match(/12\d{1}10\d{3}$/)) {
      setError('生徒番号が正しくありません。')
      return
    }

    await signInAnonymously(auth).then(async (credential) => {
      if (!credential) {
        throw new Error('No credential')
      }

      if (!auth.currentUser) {
        throw new Error('Failed to sign in. No current user')
      }

      await setupUserData()

      await updateProfile(credential.user, {
        displayName: `生徒番号 ${code}`,
      }).then(() => {
        push('/home')
      })
    })
  }

  // const updateUserProfilePhoto = async (url: string) => {
  //   // 面倒なので、一度アップロードされていたら二度と変更しない。どうせ誰も気づかないだろうし。
  //   if (!auth.currentUser) {
  //     // console.log('user not found or already has photoURL')
  //     return
  //   }

  //   await updateProfile(auth.currentUser, {
  //     photoURL: url,
  //   })
  // }

  const setupUserData = async () => {
    await fetch('/api/me/setup', {
      method: 'POST',
    })
  }

  const _signOut = () => {
    signOut(auth).then(() => {
      push('/')
    })
  }

  return {
    signInWithPopup: _signInWithPopup,
    // signInWithRedirect: _signInWithRedirect,
    signOut: _signOut,
    user,
    error,
    // updateUserProfilePhoto,
    // signInWithStudentNumberAndCodeNumber,
    signInWithGuest,
  }
}
