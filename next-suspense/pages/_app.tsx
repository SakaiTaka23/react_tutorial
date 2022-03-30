import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Suspense } from 'react'
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  return <Suspense fallback={<Loading/>}>
    <Component {...pageProps} />
    </Suspense>
}

export default MyApp
