import '../styles/globals.css'
import type { AppPropsWithLayout } from 'next/app'
import type { AppProps } from 'next/app'
import '../utils/firebase/init'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
