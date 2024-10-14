import '../styles/globals.css'

import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

// Types
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>@agallio/stacks</title>
      </Head>

      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
