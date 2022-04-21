import { getFirestore } from 'firebase-admin/firestore'
import { Video } from '../../../types/video'

const videosRef = getFirestore().collection('Videos')

export const getAllVideos = async (): Promise<Video[]> => {
  const videos = await videosRef.get()
  return videos.docs.map((doc) => doc.data() as Video)
}

export const getVideo = async (id: string): Promise<Video> => {
  const video = await videosRef.doc(id).get()
  return video.data() as Video
}

// TODO: ユーザーの動画情報(ブックマーク、履歴などの情報)を取得する関数
