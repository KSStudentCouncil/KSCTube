import { Video } from '../types/video'

export const useVideo = () => {
  const getAllVideos = async (): Promise<Video[]> => {
    const json = await fetch('/api/video', { method: 'GET' }).then((res) =>
      res.json()
    )
    return json.videos
  }

  const getVideo = async (id: string): Promise<Video> => {
    const json = await fetch(`/api/video/${id}`, {
      method: 'GET',
    }).then((res) => res.json())
    return json.video
  }

  return {
    getAllVideos,
    getVideo,
  }
}
