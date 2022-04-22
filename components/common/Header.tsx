import Link from 'next/link'
import { ComponentProps, useContext } from 'react'
import ColorToggle from './ColorToggle'
import DrawerToggle from '../ui/Drawer/DrawerToggle'
import Avatar from './Avatar'
import UserMenu from './Header/UserMenu'
import { User } from 'firebase/auth'

type Props = {
  title: string
  user: User
} & ComponentProps<'header'>

const Header = ({ title, user, ...props }: Props) => {
  return (
    <header
      {...props}
      className={`sticky top-0 z-40 bg-white dark:bg-slate-700 ${props.className}`}
    >
      <div className={'flex items-center px-5 py-2'}>
        {/* ドロワーのボタン */}
        <DrawerToggle className="mr-2" />

        <Link href={'/home'}>
          <a className="text-xl font-semibold">{title}</a>
        </Link>

        <div className="grow" />
        <ColorToggle />
        <div className="px-3">
          <UserMenu user={user} />
        </div>
      </div>
    </header>
  )
}

export default Header
