import { ComponentProps, ReactElement, useContext } from 'react'
import DrawerToggle from '../../ui/Drawer/DrawerToggle'

type Props = {
  readonly children: ReactElement
} & ComponentProps<'div'>

const OverflowDrawer = ({ children, ...props }: Props) => {
  return (
    // <div
    //   {...props}
    //   className={`inset-y-0 top-12 h-full flex-none overflow-y-auto bg-white dark:bg-gray-900 ${props.className}`}
    // >
    <aside
      {...props}
      className={`inset-y-0 top-12 z-50 h-full flex-none overflow-y-auto bg-white dark:bg-gray-900 ${props.className}`}
    >
      <div>
        <DrawerToggle className="mx-5 my-2" />
      </div>
      <div>{children}</div>
    </aside>
    // </div>
  )
}

export default OverflowDrawer
