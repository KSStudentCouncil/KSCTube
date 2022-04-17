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
} from 'firebase/auth'
// import { useRouter } from 'next/router'
import { auth, provider } from '../utils/firebase/auth'
// import { storage, UsersRef } from '../utils/firebase/storage'
import { MicrosoftClient } from '../utils/microsoft/client'
import { updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      unsubscribe()
    })
  })

  const _signInWithPopup = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
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
        const idToken = credential.idToken

        if (!accessToken) {
          throw new Error('Failed to sign in. No access token')
        }

        if (!auth.currentUser) {
          throw new Error('Failed to sign in. No current user')
        }

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

  // const _signInWithRedirect = () => {
  //   signInWithRedirect(auth, provider)

  //   getRedirectResult(auth)
  //     .then((result) => {
  //       // User is signed in.
  //       // IdP data available in result.additionalUserInfo.profile.
  //       if (!result) {
  //         return
  //       }

  //       // Get the OAuth access token and ID Token
  //       const credential = OAuthProvider.credentialFromResult(result)
  //       if (!credential) {
  //         throw new Error('No credential')
  //       }
  //       const accessToken = credential.accessToken
  //       // const idToken = credential.idToken

  //       if (!accessToken) {
  //         throw new Error('Failed to sign in. No access token')
  //       }

  //       const client = new MicrosoftClient(accessToken)
  //       client.getUserProfilePhoto().then(async (photo) => {
  //         console.log(photo)
  //         await updateUserProfilePhoto(photo)
  //       })

  //       console.log(user?.photoURL)

  //       //  redirect to /home
  //       router.push(redirectTo ?? '/home')
  //     })
  //     .catch((error) => {
  //       // Handle error.
  //     })
  // }

  const updateUserProfilePhoto = async (url: string) => {
    // 面倒なので、一度アップロードされていたら二度と変更しない。どうせ誰も気づかないだろうし。
    if (!auth.currentUser) {
      // console.log('user not found or already has photoURL')
      return
    }

    await updateProfile(auth.currentUser, {
      photoURL: url,
    })
  }

  const _signOut = () => {
    signOut(auth)
  }

  return {
    signInWithPopup: _signInWithPopup,
    // signInWithRedirect: _signInWithRedirect,
    signOut: _signOut,
    user,
    updateUserProfilePhoto,
  }
}
