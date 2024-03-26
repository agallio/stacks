import { View } from 'react-native'
import { useRouter } from 'solito/navigation'

import { Button, Text } from '../../components'

export function HomeScreen() {
  const { push } = useRouter()

  return (
    <View className="flex flex-row">
      <Text className="text-base text-black">
        Open up App.tsx to start working on your app!
      </Text>
      <Button text="Test" onClick={() => push('/read')} />
    </View>
  )
}
