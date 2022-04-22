import { getFirestore } from 'firebase-admin/firestore'
import { User } from '../../../types/user'
import { Video } from '../../../types/video'

const usersRef = getFirestore().collection('Users')
const videosRef = getFirestore().collection('Videos')

export const getAllVideos = async (): Promise<Video[]> => {
  const videos = await videosRef.get()
  return videos.docs.map((doc) => doc.data() as Video)
}

export const getVideo = async (id: string): Promise<Video> => {
  const video = await videosRef.doc(id).get()
  return video.data() as Video
}

export const setupUserVideoData = async (userId: string) => {
  const userRef = usersRef.doc(userId)
  const userData: User = {
    favorites: [],
    bookmarks: [],
    history: [],
  }
  userRef.set(userData)
}

// TODO: ユーザーの動画情報(ブックマーク、履歴などの情報)を取得する関数
export const getUserVideoData = async (userId: string): Promise<User> => {
  const user = await usersRef.doc(userId).get()
  return user.data() as User
}

/**
 * 動画をブックマークする
 * @param userId ユーザーID
 * @param videoId 動画ID
 */
export const toggleBookmarkVideo = async (
  userId: string,
  videoId: string
): Promise<void> => {
  const user = await getUserVideoData(userId)
  const video = await getVideo(videoId)

  if (user.bookmarks.includes(videoId)) {
    // 動画がブックマークされている場合
    await usersRef.doc(userId).update({
      bookmarks: user.bookmarks.filter((id) => id !== videoId),
    })
  } else {
    // 動画がブックマークされていない場合
    await usersRef.doc(userId).update({
      bookmarks: [...user.bookmarks, videoId],
    })
  }
}
