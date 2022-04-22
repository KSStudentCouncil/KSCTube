import { ReactElement, useContext } from 'react'
import Drawer from '../components/ui/Drawer'
import { PlayerProvider } from '../components/context/player'
import Header from '../components/ui/Header'
import { User } from 'firebase/auth'
import { VideoProvider } from '../components/context/video'

type LayoutProps = Required<{
  readonly children: ReactElement
  user: User
}>

const PlayerLayout = ({ children, user }: LayoutProps) => {
  return (
    <PlayerProvider>
      <VideoProvider>
        <div className="h-screen">
          <Header user={user} />
          <div className="flex h-full min-h-screen w-full overflow-y-auto">
            <Drawer />
            <main className="w-full">
              <div className="overflow-y-auto">{children}</div>
            </main>
          </div>
        </div>
      </VideoProvider>
    </PlayerProvider>
  )
}

export default PlayerLayout
