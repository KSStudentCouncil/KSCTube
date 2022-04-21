import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
  NextPageWithLayout,
} from 'next'
import { useContext, useEffect, useState } from 'react'
import VideoList from '../components/common/Video/List'
import { AuthContext } from '../components/context/auth'
import { useVideo } from '../hooks/userVideo'
import PlayerLayout from '../layout/player'
import { Video } from '../types/video'
import verifySession from '../utils/functions/verifySession'

type Props = InferGetStaticPropsType<typeof getServerSideProps>

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await verifySession(ctx)
}

const Page: NextPage<Props> = () => {
  const [videos, setVideos] = useState<Video[]>([])

  const { user } = useContext(AuthContext)
  const { getAllVideos } = useVideo()

  useEffect(() => {
    getAllVideos().then((_videos) => {
      setVideos(_videos)
    })
  }, [])

  return (
    <PlayerLayout user={user!}>
      <div className="h-screen w-full bg-slate-50 dark:bg-slate-900">
        <div>homeだよ</div>
        {/* // TODO: useTransitionでいい感じに切り替え */}
        <VideoList videos={videos} />
      </div>
    </PlayerLayout>
  )
}

export default Page
