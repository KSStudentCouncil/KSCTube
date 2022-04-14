import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  OAuthProvider,
  signOut,
} from 'firebase/auth'
import { auth, provider } from '../utils/firebase/auth'

export const useUser = () => {
  const _signInWithPopup = () => {
    signInWithPopup(auth, provider)
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

        console.log(accessToken)
        console.log(idToken)
      })
      .catch((error) => {
        // Handle error.
      })
  }

  const _signInWithRedirect = () => {
    signInWithRedirect(auth, provider)

    getRedirectResult(auth)
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

        console.log(accessToken)
        console.log(idToken)
      })
      .catch((error) => {
        // Handle error.
      })
  }

  const _signOut = () => {
    signOut(auth)
  }

  const user = auth.currentUser

  return {
    signInWithPopup: _signInWithPopup,
    signInWithRedirect: _signInWithRedirect,
    signOut: _signOut,
    user,
  }
}
