import { useEffect, useState } from 'react'
import { type NextPage } from 'next'
import Head from 'next/head'
import { useTheme } from 'next-themes'

const Index: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setIsMounted(true), [])

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
          <div className="flex flex-col mt-2">
            <p>Select Theme</p>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="system">System</option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Index
