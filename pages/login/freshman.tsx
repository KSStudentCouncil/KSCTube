import SignIn from '../../components/common/SignIn/SignIn'
import SignInWithGuest from '../../components/common/SignIn/Guest'

const Page = () => {
  return (
    <>
      <SignIn>
        <SignInWithGuest />
      </SignIn>
    </>
  )
}

export default Page
