import { ThemeProvider } from 'next-themes'

// Types
import type { AppProps } from 'next/app'

// Styles
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
