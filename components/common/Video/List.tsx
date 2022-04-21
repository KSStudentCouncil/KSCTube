import { ComponentProps } from 'react'
import { Video } from '../../../types/video'
import VideoRow from './Row'

type Props = {
  videos: Video[]
} & ComponentProps<'div'>

const VideoList = ({ videos }: Props) => {
  return (
    <div className="lg:gird-cols-3 grid grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((video) => (
        <div key={video.id}>
          <VideoRow {...video} />
        </div>
      ))}
    </div>
  )
}

export default VideoList
