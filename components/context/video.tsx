import { createContext, ReactNode, useEffect, useState } from 'react'
import { useVideo } from '../../hooks/useVideo'
import { User } from '../../types/user'

interface InitialContext {
  user: User | null
}

const initialContext: InitialContext = {
  user: null,
}

const VideoContext = createContext(initialContext)

const VideoProvider = ({ children }: { children?: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const { getUserVideoData } = useVideo()

  useEffect(() => {
    getUserVideoData().then((user) => {
      setUser(user)
    })
  }, [])

  return (
    <VideoContext.Provider value={{ user }}>{children}</VideoContext.Provider>
  )
}

export { VideoContext, VideoProvider }
