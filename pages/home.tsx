import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPageWithLayout,
} from 'next'
import PlayerLayout from '../layout/player'
import verifySession from '../utils/functions/verifySession'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await verifySession(ctx)
}

const Page: NextPageWithLayout = () => {
  return (
    <PlayerLayout>
      <div className="h-screen w-full bg-slate-50 dark:bg-slate-900">
        <div>homeだよ</div>
      </div>
    </PlayerLayout>
  )
}

export default Page
