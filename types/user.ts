export type User = {
  /**
   * ユーザーがブックマークした動画のIDの配列
   */
  bookmarks: string[]
  /**
   * ユーザーが視聴した動画履歴のIDの配列
   */
  history: string[]
  /**
   * お気に入りに入れた動画のIDの配列
   */
  favorites: string[]
}
