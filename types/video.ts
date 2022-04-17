export type Video = {
  /**
   * 動画ID
   */
  id: string
  /**
   * 動画タイトル
   */
  title: string
  /**
   * 動画説明。概要欄的な？
   */
  description: string
  /**
   * 動画の投稿者。部活名
   */
  creator: string
  /**
   * 動画の視聴回数
   */
  views: number
  /**
   * 動画のURL
   */
  videoURL: string
  /**
   * 動画のサムネイル画像URL
   */
  thumbnailURL: string
  /**
   * タグ
   */
  tags: string[]
}
