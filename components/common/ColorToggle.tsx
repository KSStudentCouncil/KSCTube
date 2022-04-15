import { ComponentProps } from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'

type Props = ComponentProps<'div'>

const ColorToggle = ({ ...props }: Props) => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <div {...props}>
        <button
          className="h-10 w-10 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
          <div className="m-auto flex h-6 w-6 ">
            {theme === 'light' ? (
              <Icon icon="carbon:moon" className="m-auto h-full w-full" />
            ) : (
              <Icon icon="carbon:sun" className="m-auto h-full w-full" />
            )}
          </div>
        </button>
      </div>
    </>
  )
}
export default ColorToggle
