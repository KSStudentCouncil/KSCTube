import { ComponentProps, useContext } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  title: string
  icon: string
  iconSelected: string
  href: string
} & ComponentProps<'div'>

const DrawerRow = ({ title, icon, iconSelected, href, ...props }: Props) => {
  const { pathname } = useRouter()
  return (
    <div {...props} className={'w-48'}>
      <Link href={href}>
        <a
          className={`
          ${'flex items-center px-6 md:flex-row'}`}
        >
          <div className={` h-5 w-5 ${'mr-2 mb-1 sm:mr-0'}`}>
            <Icon
              icon={href === pathname ? iconSelected : icon}
              className={`h-full w-full`}
            />
          </div>

          <div className={'text-lg sm:text-xs'}>{title}</div>
        </a>
      </Link>
    </div>
  )
}

export default DrawerRow
