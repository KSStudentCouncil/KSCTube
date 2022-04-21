import { Icon } from '@iconify/react'
import Link from 'next/link'
import { ComponentProps, useState } from 'react'
import { Video } from '../../../types/video'

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
          <button
            className={`z-20 h-7 w-7 rounded-md hover:bg-slate-600  ${
              isBooked ? 'text-slate-500' : 'text-blue-500 '
            }`}
            onClick={() => {
              // TODO: ここらへんのまじめな実装
              setIsBooked(!isBooked)
            }}
          >
            <div className="m-auto h-5 w-5">
              {/* // TODO: ブックマーク状態で切り替え */}
              <Icon
                icon={isBooked ? 'bi:bookmark' : 'bi:bookmark-fill'}
                className={`h-full w-full`}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoRow
