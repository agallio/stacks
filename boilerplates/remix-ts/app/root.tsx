import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction, LinksFunction } from 'remix'

// Styles
import styles from './styles/app.css'

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (
                localStorage.theme === '"dark"' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
              ) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
