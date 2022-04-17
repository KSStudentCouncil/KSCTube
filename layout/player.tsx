import { ReactElement } from 'react'
import Drawer from '../components/ui/Drawer'
import { PlayerProvider } from '../components/context/player'
import Header from '../components/ui/Header'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const PlayerLayout = ({ children }: LayoutProps) => {
  return (
    <PlayerProvider>
      <div className="h-screen">
        <Header />
        <div className="flex min-h-screen overflow-y-auto">
          <Drawer />
          <main className="w-full">
            <div className="overflow-y-auto">{children}</div>
          </main>
        </div>
      </div>
    </PlayerProvider>
  )
}

export default PlayerLayout
