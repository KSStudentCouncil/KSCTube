import '../styles/globals.css'
import type { AppPropsWithLayout } from 'next/app'
import '../utils/firebase/init'
import { AuthProvider } from '../components/context/auth'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <AuthProvider>
          <div className="bg-white text-black transition-colors duration-200 dark:bg-gray-800 dark:text-white">
            <Component {...pageProps} />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
