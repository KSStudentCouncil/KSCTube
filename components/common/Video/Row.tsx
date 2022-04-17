import { ComponentProps } from 'react'

type Props = {
  /**
   * 動画タイトル
   */
  title: string
  /**
   * 視聴回数
   */
  views: number
  /**
   * タグ
   */
  tags: string[]
} & ComponentProps<'div'>

const VideoRow = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <div>hi</div>
    </div>
  )
}

export default VideoRow
