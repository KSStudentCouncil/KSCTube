import { ComponentProps, ReactElement } from 'react'

type Props = {
  readonly children: ReactElement
} & ComponentProps<'aside'>

const SmallDrawer = ({ children, ...props }: Props) => {
  return (
    <aside
      {...props}
      className={`inset-y-0 top-12 h-full flex-none overflow-y-auto bg-white dark:bg-slate-800  ${props.className}`}
    >
      {children}
    </aside>
  )
}

export default SmallDrawer
