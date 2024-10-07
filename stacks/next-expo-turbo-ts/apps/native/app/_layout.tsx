import '../global.css'

import { useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import {
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="detail" options={{ title: 'Detail' }} />
      </Stack>
    </ThemeProvider>
  )
}
