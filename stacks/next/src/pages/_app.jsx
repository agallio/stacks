import '../styles/globals.css'

import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }) {
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
