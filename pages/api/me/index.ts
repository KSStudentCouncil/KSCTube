import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '../../../utils/firebase/admin/auth'
import { getUserVideoData } from '../../../utils/firebase/admin/firestore'

const onGet = async (
  req: NextApiRequest,
  res: NextApiResponse,
  uid: string
) => {
  const userVideoData = await getUserVideoData(uid)
  res.status(200).json(userVideoData)
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
    case 'GET': {
      return await onGet(req, res, uid)
    }
    default: {
      // method not allowed
      res.status(405)
    }
  }
}
