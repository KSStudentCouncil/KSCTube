import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '../../../utils/firebase/admin/auth'
import {
  getUserVideoData,
  setupUserVideoData,
} from '../../../utils/firebase/admin/firestore'

const onPost = async (
  req: NextApiRequest,
  res: NextApiResponse,
  uid: string
) => {
  const userData = await getUserVideoData(uid)
  if (userData) {
    res.status(200).json({
      message: 'User data already exists',
    })
  } else {
    await setupUserVideoData(uid)
    res.status(200).json({
      message: 'User data created',
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
