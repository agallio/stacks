import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useTheme } from 'next-themes'

// Types
import type { NextPage } from 'next'

const Index: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme: theme, setTheme } = useTheme()

  useEffect(() => setIsMounted(true), [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <>
      <Head>
        <title>Next.js (TypeScript) - @agallio/stacks</title>
      </Head>

      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1>
          <b>Next.js (TypeScript)</b> - @agallio/stacks
        </h1>

        {isMounted ? (
          <button className="hover:underline" onClick={switchTheme}>
            Switch Theme
          </button>
        ) : null}
      </div>
    </>
  )
}

export default Index
