import { GetServerSidePropsContext } from 'next'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../components/context/auth'
import PlayerLayout from '../../layout/player'
import { Video } from '../../types/video'
import { getVideo } from '../../utils/firebase/admin/firestore'
import { checkSession } from '../../utils/firebase/admin/auth'
import VideoPlayer from '../../components/common/Video/Player'

type Props = {
  video: Video
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await checkSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
      props: {},
    }
  }

  // TODO: ここで動画IDから動画情報を取得する
  const videoId = ctx.params?.video_id

  if (!videoId) {
    return {
      redirect: {
        destination: '/watch/404',
      },
      props: {},
    }
  }

  const video = await getVideo(videoId as string)

  return {
    props: {
      video: video,
    },
  }
}

const Page = ({ video }: Props) => {
  const { user } = useContext(AuthContext)

  return (
    <PlayerLayout user={user!}>
      <div className="h-screen w-full bg-slate-50 dark:bg-gray-800">
        {/* <div>homeだよ</div> */}
        {/* // TODO: useTransitionでいい感じに切り替え */}
        <div className="flex bg-black lg:px-20">
          <VideoPlayer {...video} className=" aspect-video " />
        </div>

        <h3 className="text-md my-2 px-6 font-bold">{video.title}</h3>
      </div>
    </PlayerLayout>
  )
}

export default Page
