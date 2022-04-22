import { ComponentProps } from 'react'
import VideoTag from './Tag'

type Props = {
  tags: string[]
} & ComponentProps<'div'>

const VideoTagList = ({ ...props }: Props) => {
  return (
    <div {...props} className={`flex ${props.className}`}>
      {props.tags.map((tag) => (
        <div key={tag} className="mr-2">
          <VideoTag text={tag} />
        </div>
      ))}
    </div>
  )
}

export default VideoTagList
