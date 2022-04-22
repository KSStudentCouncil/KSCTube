import { User } from '../types/user'
import { Video } from '../types/video'

export const useVideo = () => {
  const getAllVideos = async (): Promise<Video[]> => {
    const json = await fetch('/api/video', { method: 'GET' }).then((res) =>
      res.json()
    )
    return json
  }

  const getVideo = async (videoId: string): Promise<Video> => {
    const json = await fetch(`/api/video/${videoId}`, {
      method: 'GET',
    }).then((res) => res.json())
    return json
  }

  const getUserVideoData = async (): Promise<User> => {
    const json = await fetch('/api/me', { method: 'GET' }).then((res) =>
      res.json()
    )
    return json
  }

  const toggleBookmarkVideo = async (videoId: string): Promise<void> => {
    const json = await fetch('/api/video/bookmark', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ video_id: videoId }),
    }).then((res) => res.json())
    return json
  }

  return {
    getAllVideos,
    getVideo,
    getUserVideoData,
    toggleBookmarkVideo,
  }
}
