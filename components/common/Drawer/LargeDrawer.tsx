import { ComponentProps, ReactElement } from 'react'

type Props = {
  readonly children: ReactElement
} & ComponentProps<'aside'>

const LargeDrawer = ({ children, ...props }: Props) => {
  return (
    <aside
      {...props}
      className={`inset-y-0 top-12 h-full flex-none overflow-y-auto bg-white dark:bg-gray-900 ${props.className}`}
    >
      {children}
    </aside>
  )
}

export default LargeDrawer
