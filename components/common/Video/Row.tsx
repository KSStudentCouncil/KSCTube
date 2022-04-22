import { Icon } from '@iconify/react'
import Link from 'next/link'
import { ComponentProps, useContext, useEffect, useState } from 'react'
import { useVideo } from '../../../hooks/userVideo'
import { Video } from '../../../types/video'
import { VideoContext } from '../../context/video'
import BookmarkButton from './BookmarkButton'
import VideoTagList from './Tag/TagList'

type Props = Video & ComponentProps<'div'>

const VideoRow = ({ ...props }: Props) => {
  const { user } = useContext(VideoContext)
  const [isBooked, setIsBooked] = useState(false)
  const { toggleBookmarkVideo } = useVideo()

  useEffect(() => {
    if (user) {
      setIsBooked(user.bookmarks.includes(props.id))
    }
  }, [])

  return (
    <div {...props} className={`w-xl ${props.className}`}>
      <Link href={`/wathc/${props.id}`}>
        <a>
          <img src={props.thumbnailURL} />
        </a>
      </Link>
      <div className="flex items-start">
        <div className="w-full">
          <VideoTagList tags={props.tags} />
          <p>{props.title}</p>
          <p className="opacity-75">{props.creator}</p>
        </div>
        <div className="mr-2 mt-2 text-xl">
          <BookmarkButton
            isBooked={isBooked}
            onClick={() => {
              // TODO: ここらへんのまじめな実装
              setIsBooked(!isBooked)
              toggleBookmarkVideo(props.id)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default VideoRow
