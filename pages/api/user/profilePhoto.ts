import { updateProfile } from 'firebase/auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import { useContext } from 'react'
import { AuthContext } from '../../../components/context/auth'
import { useUser } from '../../../hooks/useUser'
import { cloudinary } from '../../../utils/cloudinary/client'
import { auth } from '../../../utils/firebase/auth'

const onPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = auth.currentUser
  // const { user } = useContext(AuthContext)

  if (!user) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  const photo: Blob | null = req.body.photo

  if (!photo) {
    return res.status(400).json({ error: 'No photo' })
  }

  // byte array buffer of photo
  const buffer = await photo.arrayBuffer()
  const base64 = Buffer.from(buffer).toString('base64')

  // upload profile image to cloudinary
  const result = await cloudinary.uploader.upload(base64, {
    folder: 'users',
    public_id: user!.uid,
    overwrite: true,
  })

  if (result.secure_url) {
    await updateProfile(user, { photoURL: result.secure_url })
  }

  return
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 後回し！

  // switch (req.method) {
  //   case 'POST': {
  //     return await onPost(req, res)
  //   }
  // }

  res.status(404)

  // res.status(200)
}
