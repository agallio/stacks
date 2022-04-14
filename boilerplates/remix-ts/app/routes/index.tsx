import { useEffect, useState } from 'react'
import { MetaFunction } from 'remix'

import useLocalStorage from '~/utils/hooks/useLocalStorage'

export const meta: MetaFunction = () => {
  return { title: 'Remix (TypeScript) - @agallio/stacks' }
}

export default function Index() {
  const [isMounted, setIsMounted] = useState(false)
  const [, setTheme] = useLocalStorage('theme', '')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const switchTheme = () => {
    if (document.documentElement.classList.value.includes('dark')) {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1>
        <b>Remix (TypeScript)</b> - @agallio/stacks
      </h1>

      {isMounted ? (
        <button className="hover:underline" onClick={switchTheme}>
          Switch Theme
        </button>
      ) : null}
    </div>
  )
}
