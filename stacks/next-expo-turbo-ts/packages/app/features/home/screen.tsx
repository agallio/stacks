import { View } from 'react-native'
import { useRouter } from 'solito/navigation'

// Components
import { Button, Text } from '../../components'

export function HomeScreen() {
  const { push } = useRouter()

  return (
    <View className="flex flex-1 items-center justify-center gap-4">
      <Text className="text-black">
        Open up App.tsx to start working on your app!
      </Text>
      <Button text="Test" onClick={() => push('/read')} />
    </View>
  )
}
