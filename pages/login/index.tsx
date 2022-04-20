import { GetServerSideProps, NextPageWithLayout } from 'next'
import SignInMethods from '../../components/common/SignIn/Methods'
import SignIn from '../../components/common/SignIn/SignIn'
import verifySession from '../../utils/functions/verifySession'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await verifySession(ctx)
}

const Page: NextPageWithLayout = () => {
  return (
    <>
      <SignIn redirectTo={'/home'}>
        <SignInMethods />
      </SignIn>
    </>
  )
}

export default Page
