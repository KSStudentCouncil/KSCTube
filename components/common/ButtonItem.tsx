import { Icon } from '@iconify/react'
import { ComponentProps } from 'react'

type Props = {
  icon: string
} & ComponentProps<'button'>

const ButtonItem = ({ icon, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`h-10 w-10 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 ${props.className}`}
    >
      <div className="m-auto h-6 w-6">
        <Icon icon={icon} className="m-auto h-full w-full" />
      </div>
    </button>
  )
}

export default ButtonItem
