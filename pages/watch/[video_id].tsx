import { useContext } from 'react'
import { AuthContext } from '../../components/context/auth'
import { Video } from '../../types/video'

type Props = {
  video: Video
}

export const getServerSideProps = async () => {
  // TODO: ここで動画IDから動画情報を取得する

  const video = {} as Video

  return {
    props: {
      video: video,
    },
  }
}

const Page = ({ video }: Props) => {
  const { user } = useContext(AuthContext)

  return <div className="">watch!</div>
}

export default Page
