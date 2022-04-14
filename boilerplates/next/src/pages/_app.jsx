import { ThemeProvider } from 'next-themes'

// Styles
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
