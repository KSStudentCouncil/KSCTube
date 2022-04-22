import { Icon } from '@iconify/react'
import { ComponentProps, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

type Props = {
  isBooked: boolean
} & ComponentProps<'button'>

const BookmarkButton = ({ isBooked, ...props }: Props) => {
  const controlls = useAnimation()

  const bookedAnimation = {
    scale: [1, 1.2, 1, 1],

    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  }

  const unbookedAnimation = {
    y: [0, 5, 0, 0],
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  }

  useEffect(() => {
    if (isBooked) {
      controlls.start(bookedAnimation)
    } else {
      controlls.start(unbookedAnimation)
    }
  }, [isBooked])

  return (
    <button
      {...props}
      className={`z-20 h-7 w-7 rounded-md hover:bg-slate-300 hover:bg-opacity-75 dark:hover:bg-slate-700  ${
        isBooked ? 'text-blue-500' : 'text-slate-500 '
      } ${props.className}`}
    >
      <motion.div animate={controlls} className="m-auto h-5 w-5">
        <Icon
          icon={isBooked ? 'bi:bookmark-fill' : 'bi:bookmark'}
          className={`h-full w-full`}
        />
      </motion.div>
    </button>
  )
}

export default BookmarkButton
