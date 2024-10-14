import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function Index() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setIsMounted(true), [])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>
        <b>Next.js (TypeScript)</b> - @agallio/stacks
      </h1>

      {isMounted ? (
        <div className="mt-2 flex flex-col">
          <p>Select Theme</p>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      ) : null}
    </div>
  )
}


