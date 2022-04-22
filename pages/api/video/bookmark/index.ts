import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '../../../../utils/firebase/admin/auth'
import {
  toggleBookmarkVideo,
  getAllVideos,
} from '../../../../utils/firebase/admin/firestore'

const onPost = async (
  req: NextApiRequest,
  res: NextApiResponse,
  uid: string
) => {
  const videoId = req.body.video_id as string

  try {
    await toggleBookmarkVideo(uid, videoId)
    res.status(200).json({
      message: 'success',
    })
  } catch {
    res.status(500).json({
      message: 'Internal Server Error',
    })
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = req.cookies.session

  // check firebase cookie
  const uid = await auth
    .verifyIdToken(session)
    .then((credential) => {
      return credential.uid
    })
    .catch((error) => {
      console.error(error)
      res.status(401).json({
        message: 'Unauthorized',
      })
      return null
    })

  if (!uid) {
    return
  }

  switch (req.method) {
    case 'POST': {
      return await onPost(req, res, uid)
    }
    default: {
      // method not allowed
      res.status(405)
    }
  }
}
