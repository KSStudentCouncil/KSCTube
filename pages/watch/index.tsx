import { GetServerSideProps } from 'next'

export const getServerSideProps = async (ctx: GetServerSideProps) => {
  return {
    redirect: {
      destination: '/home',
    },
    props: {},
  }
}

const Page = () => {
  return <></>
}

export default Page
