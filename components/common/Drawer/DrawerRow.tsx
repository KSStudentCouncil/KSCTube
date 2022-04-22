import { ComponentProps, useContext } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import path from 'path'
import { PlayerContext } from '../../context/player'

type Props = {
  title: string
  icon: string
  iconSelected: string
  href: string
} & ComponentProps<'div'>

const DrawerRow = ({ title, icon, iconSelected, href, ...props }: Props) => {
  const { isDrawerDefault, shouldHideInDefault } = useContext(PlayerContext)
  const { pathname } = useRouter()

  return (
    <div
      {...props}
      className={
        isDrawerDefault && !shouldHideInDefault
          ? 'w-48'
          : !isDrawerDefault && !shouldHideInDefault
          ? 'w-56 md:w-24'
          : 'w-56'
      }
    >
      <Link href={href}>
        <a
          className={`
          ${
            isDrawerDefault && !shouldHideInDefault
              ? // home などでドロワー展開時
                'flex items-center px-6 md:flex-row'
              : !isDrawerDefault && !shouldHideInDefault
              ? //   home などで最小化時
                'flex items-center px-6 md:flex-col md:px-0 '
              : 'flex items-center px-6'
          }`}
        >
          <div
            className={` h-5 w-5 ${
              !isDrawerDefault && !shouldHideInDefault
                ? 'mr-2 mb-1 md:mr-0'
                : 'mr-2'
            }`}
          >
            <Icon
              icon={href === pathname ? iconSelected : icon}
              className={`m-auto h-full w-full`}
            />
          </div>

          <div
            className={
              isDrawerDefault && !shouldHideInDefault
                ? 'text-lg'
                : !isDrawerDefault && !shouldHideInDefault
                ? 'text-lg md:text-xs'
                : 'text-lg'
            }
          >
            {title}
          </div>
        </a>
      </Link>
    </div>
  )
}

export default DrawerRow
