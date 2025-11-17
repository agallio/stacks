import '../global.css'

import { useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import {
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <View
      className="flex-1"
      style={{
        backgroundColor:
          colorScheme === 'light'
            ? DefaultTheme.colors.background
            : DarkTheme.colors.background,
      }}
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Home' }} />
          <Stack.Screen name="detail" options={{ title: 'Detail' }} />
        </Stack>

        <StatusBar style="auto" />
      </ThemeProvider>
    </View>
  )
}
