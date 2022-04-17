import { useRouter } from 'next/router'
import { createContext, ReactNode, useEffect, useState } from 'react'

// type DrawerState = 'drawn' | 'small' | 'hover-drawn' | 'hidden'

interface InitialContext {
  isDrawerDefault: boolean
  setIsDrawerDefault: (drawerOpened: boolean) => void
  toggleDrawer: () => void

  /**
   * これは、**通常時**にドロワーが表示されているべきかどうか、ドロワーを完全に閉じ切ることができるかどうかの値
   */
  shouldBeHiddenInDefault: boolean
  setShouldBeHiddenInDefault: (shouldHidden: boolean) => void
  // ↑英語ゴミだけどごめんね。動いてるからいいんだよ。
}

const initialContext = {
  isDrawerDefault: true,
} as InitialContext

const PlayerContext = createContext(initialContext)

const PlayerProvider = ({ children }: { children?: ReactNode }) => {
  const [isDrawerDefault, setIsDrawerDefault] = useState<boolean>(true)
  const [shouldBeHiddenInDefault, setShouldBeHiddenInDefault] =
    useState<boolean>(false)

  const { pathname } = useRouter()

  useEffect(() => {
    setIsDrawerDefault(true)
  }, [pathname])

  const toggleDrawer = () => {
    setIsDrawerDefault(!isDrawerDefault)
  }

  return (
    <PlayerContext.Provider
      value={{
        isDrawerDefault,
        setIsDrawerDefault,
        toggleDrawer,
        shouldBeHiddenInDefault,
        setShouldBeHiddenInDefault,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export { PlayerContext, PlayerProvider }
