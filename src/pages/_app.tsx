import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import { Analytics } from '@/components/common/analytics'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}
