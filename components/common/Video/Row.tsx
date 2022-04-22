import { Icon } from '@iconify/react'
import Link from 'next/link'
import { ComponentProps, useState } from 'react'
import { Video } from '../../../types/video'
import BookmarkButton from '../../ui/Video/BookmarkButton'

type Props = Video & ComponentProps<'div'>

const VideoRow = ({ ...props }: Props) => {
  const [isBooked, setIsBooked] = useState(false)
  return (
    <div {...props} className={`w-xl ${props.className}`}>
      <Link href={`/wathc/${props.id}`}>
        <a>
          <img src={props.thumbnailURL} />
        </a>
      </Link>
      <div className="flex items-start">
        <div className="w-full">
          <p>{props.title}</p>
          <p className="opacity-75">{props.creator}</p>
        </div>
        <div className="mr-2 mt-2 text-xl">
          <BookmarkButton
            isBooked={isBooked}
            onClick={() => {
              // TODO: ここらへんのまじめな実装
              setIsBooked(!isBooked)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default VideoRow
