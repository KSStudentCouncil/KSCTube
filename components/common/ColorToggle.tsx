import { ComponentProps } from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'
import ButtonItem from './ButtonItem'

type Props = ComponentProps<'div'>

const ColorToggle = ({ ...props }: Props) => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <div {...props}>
        <ButtonItem
          icon={theme === 'light' ? 'carbon:moon' : 'carbon:sun'}
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        />
      </div>
    </>
  )
}
export default ColorToggle
