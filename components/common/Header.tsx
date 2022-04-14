import { forwardRef, ComponentProps } from 'react'

type Props = {
  title: string
} & ComponentProps<'header'>

const Header = ({ title, ...props }: Props) => {
  return (
    <header {...props}>
      <>{title}</>
    </header>
  )
}

export default Header
