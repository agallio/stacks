import '../global.css'

import { useEffect } from 'react'
import { Platform, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import {
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import * as SystemUI from 'expo-system-ui'
import * as NavigationBar from 'expo-navigation-bar'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  useEffect(() => {
    if (Platform.OS === 'android') {
      const setAndroidBackgroundColor = async () => {
        SystemUI.setBackgroundColorAsync(
          colorScheme === 'dark'
            ? DarkTheme.colors.background
            : DefaultTheme.colors.background,
        )
      }

      const setAndroidNavigationBarColor = async () => {
        await NavigationBar.setBackgroundColorAsync(
          colorScheme === 'dark'
            ? DarkTheme.colors.background
            : DefaultTheme.colors.background,
        )
      }

      setAndroidBackgroundColor()
      setAndroidNavigationBarColor()
    }
  }, [colorScheme])

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="detail" options={{ title: 'Detail' }} />
      </Stack>
    </ThemeProvider>
  )
}
