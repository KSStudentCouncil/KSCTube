import { Icon } from '@iconify/react'
import Link from 'next/link'
import { ComponentProps, useContext, useEffect, useState } from 'react'
import { useVideo } from '../../../hooks/useVideo'
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

  const watchLink = `/watch/${props.id}`

  return (
    <div {...props} className={`${props.className}`}>
      <Link href={watchLink}>
        <a>
          <img src={props.thumbnailURL} className="aspect-video rounded-md" />
        </a>
      </Link>
      <div className="flex items-start">
        <div className="w-full">
          <VideoTagList tags={props.tags} />
          <Link href={watchLink}>
            <a>
              <p>{props.title}</p>
            </a>
          </Link>
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
