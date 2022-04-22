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
import { useVideo } from '../hooks/useVideo'
import PlayerLayout from '../layout/player'
import { Video } from '../types/video'
import verifySession from '../utils/functions/verifySession'

type Props = InferGetStaticPropsType<typeof getServerSideProps>

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await verifySession(ctx)
}

const Page: NextPage<Props> = () => {
  const [sortedByViewsVideo, setSortedByViewsVideo] = useState<Video[]>([])

  const { user } = useContext(AuthContext)
  const { getAllVideos, videos } = useVideo()

  useEffect(() => {
    getAllVideos().then((_videos) => {
      setSortedByViewsVideo(
        _videos.sort((a, b) => {
          return a.views - b.views
        })
      )
    })
  }, [])

  return (
    <PlayerLayout user={user!}>
      <div className="h-screen w-full bg-slate-50 pt-4 dark:bg-gray-800">
        {/* <div>homeだよ</div> */}
        {/* // TODO: useTransitionでいい感じに切り替え */}
        <h3 className="text-md my-2 px-6 font-bold">話題の動画</h3>
        <VideoList videos={sortedByViewsVideo} />
      </div>
    </PlayerLayout>
  )
}

export default Page
