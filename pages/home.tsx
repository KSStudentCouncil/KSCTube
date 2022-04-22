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
import { checkSession } from '../utils/firebase/admin/auth'
import { getAllVideos } from '../utils/firebase/admin/firestore'

type Props = { videos: Video[] } //& InferGetStaticPropsType<typeof getServerSideProps>

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await checkSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
      props: {},
    }
  }

  const videos = await getAllVideos()
  return {
    props: {
      videos: videos,
    },
  }
}

const Page: NextPage<Props> = ({ videos }: Props) => {
  const [sortedByViewsVideo, setSortedByViewsVideo] = useState<Video[]>([])

  const { user } = useContext(AuthContext)

  useEffect(() => {
    setSortedByViewsVideo(
      videos.sort((a, b) => {
        return a.views - b.views
      })
    )
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
