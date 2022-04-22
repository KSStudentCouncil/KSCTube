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
import PlayerLayout from '../layout/player'
import { Video } from '../types/video'
import { checkSession } from '../utils/firebase/admin/auth'
import { getAllVideos } from '../utils/firebase/admin/firestore'

type Props = {
  videos: Video[]
}

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
    // MARK: 本番はこっち
    // setSortedByViewsVideo(
    //   videos.sort((a, b) => {
    //     return a.views - b.views
    //   })
    // )

    setSortedByViewsVideo([
      ...videos,
      ...videos,
      ...videos,
      ...videos,
      ...videos,
      ...videos,
      ...videos,
      ...videos,
      ...videos,
      ...videos,
      ...videos,
      ...videos,
      ...videos,
      ...videos,
      ...videos,
    ])
  }, [])

  return (
    <PlayerLayout user={user!}>
      <div className="h-full w-full bg-slate-50 pt-4 pb-40 dark:bg-gray-800">
        {/* // TODO: useTransitionでいい感じに切り替え */}
        <h3 className="text-md my-2 px-6 font-bold">話題の動画</h3>
        <VideoList videos={sortedByViewsVideo} />
      </div>
    </PlayerLayout>
  )
}

export default Page
