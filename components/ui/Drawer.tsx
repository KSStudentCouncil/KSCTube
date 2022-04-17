import { ComponentProps, useContext } from 'react'
import { PlayerContext } from '../context/player'
import DrawerRow from '../common/Drawer/DrawerRow'
import LargeDrawer from '../common/Drawer/LargeDrawer'
import SmallDrawer from '../common/Drawer/SmallDrawer'
import OverflowDrawer from '../common/Drawer/OverflowDrawer'
import { Transition } from '@headlessui/react'

type Props = {} & ComponentProps<'div'>

const Drawer = ({ ...props }: Props) => {
  const {
    isDrawerDefault,
    shouldBeHiddenInDefault,
    setIsDrawerDefault,
    toggleDrawer,
  } = useContext(PlayerContext)

  const drawerContent = (
    <menu className={` flex flex-col gap-y-4 py-3`}>
      <DrawerRow
        title="ホーム"
        icon="bi:house-door"
        iconSelected="bi:house-door-fill"
        href="/home"
      />
      <DrawerRow
        title="お気に入り"
        icon="bi:star"
        iconSelected="bi:star-fill"
        href="/favorites"
      />
      <DrawerRow
        title="ブックマーク"
        icon="bi:bookmarks"
        iconSelected="bi:bookmarks-fill"
        href="/bookmarks"
      />
      <DrawerRow
        title="履歴"
        icon="fluent:history-24-regular"
        iconSelected="fluent:history-24-filled"
        href="/history"
      />
    </menu>
  )

  //   home ドロワーが通常で隠されていないべきの
  if (!shouldBeHiddenInDefault) {
    // PC: ドロワーが通常で表示されている
    // モバイル: ドロワー非表示！！
    return (
      <>
        <Transition
          show={isDrawerDefault}
          {...props}
          className={`hidden h-full md:block ${props.className}`}
        >
          <LargeDrawer>{drawerContent}</LargeDrawer>
        </Transition>

        {/* // PC: small
      // モバイル: オーバーフロー */}

        <Transition
          show={!isDrawerDefault}
          {...props}
          className={`hidden h-full md:block ${props.className}`}
        >
          <SmallDrawer>{drawerContent}</SmallDrawer>
        </Transition>

        {/*  */}
        <Transition
          show={!isDrawerDefault}
          {...props}
          className={`absolute h-full md:hidden ${props.className}`}
        >
          <div
            className={`fixed inset-0 z-40 h-full overflow-hidden  md:hidden`}
          >
            <Transition.Child
              enter="transition-opacity ease-in duration-200 "
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-out duration-200 "
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className={'absolute h-full w-full md:hidden'}
            >
              <div
                className="h-full w-full bg-slate-600 bg-opacity-75 md:hidden"
                onClick={() => {
                  toggleDrawer()
                }}
              />
            </Transition.Child>
            <Transition.Child
              enter="transition-all ease-in-out duration-300 transform"
              enterFrom="-translate-x-48"
              enterTo="translate-x-0"
              leave="transition-all ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-48"
              {...props}
              className={`absolute z-40 h-full md:hidden ${props.className} `}
            >
              <div className="h-full">
                <OverflowDrawer>{drawerContent}</OverflowDrawer>
              </div>
            </Transition.Child>
          </div>
        </Transition>
      </>
    )
    // }
  } else {
    //  プレイヤーの時 ドロワーが通常時隠されているべき
    return (
      <div {...props}>
        <LargeDrawer>{drawerContent}</LargeDrawer>
      </div>
    )
  }
}

export default Drawer
