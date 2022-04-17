import Link from 'next/link'
import { ComponentProps, useContext } from 'react'
import ColorToggle from './ColorToggle'
import DrawerToggle from '../ui/Drawer/DrawerToggle'

type Props = {
  title: string
} & ComponentProps<'header'>

const Header = ({ title, ...props }: Props) => {
  return (
    <header
      {...props}
      className={`sticky top-0 z-40 bg-white dark:bg-gray-900 ${props.className}`}
    >
      <div className={'flex items-center px-5 py-2'}>
        {/* ドロワーのボタン */}
        <DrawerToggle className="mr-2" />

        <Link href={'/home'}>
          <a className="text-xl font-semibold">{title}</a>
        </Link>

        <div className="grow" />
        <ColorToggle />
      </div>
    </header>
  )
}

export default Header
