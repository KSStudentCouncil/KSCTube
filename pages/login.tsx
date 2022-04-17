import { GetServerSideProps, NextPageWithLayout } from 'next'
import SignIn from '../components/ui/SignIn'
import verifySession from '../utils/functions/verifySession'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await verifySession(ctx)
}

const Page: NextPageWithLayout = () => {
  return (
    <>
      <SignIn redirectTo={'/home'} />
    </>
  )
}

export default Page
