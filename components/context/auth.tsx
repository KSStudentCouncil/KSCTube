import { User } from 'firebase/auth'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { auth } from '../../utils/firebase/auth'
import nookies from 'nookies'

interface InitialContext {
  user: User | null
}

const initialContext: InitialContext = {
  user: null,
}

const AuthContext = createContext(initialContext)

const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const cookieKey = 'session'
  const interval = 10 * 60 * 1000
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        nookies.destroy(null, cookieKey)
        setUser(null)
        return
      }

      const token = await user.getIdToken()
      setUser(user)
      nookies.destroy(null, cookieKey)
      nookies.set(undefined, cookieKey, token, {})
    })
  }, [])

  useEffect(() => {
    const handler = setInterval(async () => {
      const user = auth.currentUser
      if (user) {
        await user.getIdToken(true)
      }
    }, interval)
    return () => clearInterval(handler)
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
