import { View } from 'react-native'
import { useRouter } from 'expo-router'

// Components
import Button from '@repo/app/components/button'
import Text from '@repo/app/components/text'

export default function HomeScreen() {
  const router = useRouter()

  return (
    <View className="flex-1 items-center justify-center">
      <Text customFontSize="text-xl">Next.js + Expo Monorepo</Text>
      <Text className="my-2">Home Screen</Text>
      <Button text="Detail Screen" onClick={() => router.push('/detail')} />
    </View>
  )
}
