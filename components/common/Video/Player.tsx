import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import { ComponentProps } from 'react'

type Props = {
  title?: string
  videoURL: string
  thumbnailURL: string
} & ComponentProps<'div'>

const VideoPlayer = ({ title, videoURL, thumbnailURL, ...props }: Props) => {
  return (
    <div {...props}>
      <Plyr
        source={{
          type: 'video',
          title: title,
          sources: [
            {
              src: videoURL,
            },
          ],
          previewThumbnails: {
            src: thumbnailURL,
          },
        }}
      />
    </div>
  )
}

export default VideoPlayer
