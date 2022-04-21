import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '../../../utils/firebase/admin/auth'
import { getAllVideos } from '../../../utils/firebase/admin/firestore'

const onGet = async (req: NextApiRequest, res: NextApiResponse) => {
  const videos = await getAllVideos()
  res.status(200).json({
    videos,
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = req.cookies.session

  // check firebase cookie
  await auth.verifyIdToken(session).catch((error) => {
    console.error(error)
    res.status(401).json({
      message: 'Unauthorized',
    })
    return
  })

  switch (req.method) {
    case 'GET': {
      return await onGet(req, res)
    }
    default: {
      // method not allowed
      res.status(405)
    }
  }
}
