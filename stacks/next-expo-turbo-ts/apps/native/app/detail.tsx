import { View } from 'react-native'
import { useRouter } from 'expo-router'

// Components
import Button from '@repo/app/components/button'
import Text from '@repo/app/components/text'

export default function HomeScreen() {
  const router = useRouter()

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Detail Screen</Text>
      <Button text="Back" className="mt-2" onClick={() => router.back()} />
    </View>
  )
}
