import { forwardRef, ComponentProps } from 'react'
import ColorToggle from './ColorToggle'

type Props = {
  title: string
} & ComponentProps<'header'>

const Header = ({ title, ...props }: Props) => {
  return (
    <header {...props}>
      <div className={'flex p-4'}>
        <p>{title}</p>
        <div className="w-full" />
        <ColorToggle />
      </div>
    </header>
  )
}

export default Header
