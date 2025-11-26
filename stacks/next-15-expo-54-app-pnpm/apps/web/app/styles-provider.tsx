'use client'

import { PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { useServerInsertedHTML } from 'next/navigation'

export function StylesProvider({ children }: PropsWithChildren) {
  useServerInsertedHTML(() => {
    // @ts-ignore
    const sheet = StyleSheet.getSheet()
    return (
      <style
        dangerouslySetInnerHTML={{ __html: sheet.textContent }}
        id={sheet.id}
      />
    )
  })

  return <>{children}</>
}
