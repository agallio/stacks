import '../styles/global.css'

import Head from 'next/head'
import { type AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>@agallio/stacks</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
