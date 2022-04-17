import { ComponentProps } from 'react'
import { Icon } from '@iconify/react'

type Props = {
  colorScheme: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
} & ComponentProps<'div'>

const Alert = ({ colorScheme, title, message, ...props }: Props) => {
  const color = (() => {
    switch (colorScheme) {
      case 'success': {
        return 'green'
      }
      case 'error': {
        return 'red'
      }
      case 'warning': {
        return 'orange'
      }
      case 'info': {
        return 'blue'
      }
    }
  })()

  const icon = (() => {
    switch (colorScheme) {
      case 'success': {
        return 'ep:circle-check-filled'
      }
      case 'error': {
        return 'ph:x-circle-fill'
      }
      case 'warning': {
        return 'carbon:warning-alt-filled'
      }
      case 'info': {
        return 'clarity:info-standard-solid'
      }
    }
  })()

  return (
    <div className=" mx-auto flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
      <div className={`flex w-12 items-center justify-center bg-${color}-500`}>
        <Icon className="h-6 w-6 text-white " icon={icon} />
      </div>

      <div className="-mx-3 px-4 py-2">
        <div className="mx-3">
          <span
            className={`font-semibold text-${color}-500 dark:text-${color}-400`}
          >
            {title}
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-200">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Alert
