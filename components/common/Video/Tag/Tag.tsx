import { ComponentProps } from 'react'

type Props = {
  text: string
} & ComponentProps<'div'>

const VideoTag = ({ text, ...props }: Props) => {
  return (
    <div {...props}>
      <p className="my-1 rounded-full border border-blue-500 py-0.5 px-2 text-xs font-semibold text-blue-500 dark:border-blue-400 dark:text-blue-400 ">
        {text}
      </p>
    </div>
  )
}

export default VideoTag
