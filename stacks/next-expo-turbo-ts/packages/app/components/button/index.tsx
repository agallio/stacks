import { TouchableOpacity, GestureResponderEvent } from 'react-native'

// Components
import { Text } from '../text'

export interface ButtonProps {
  text: string
  onClick?: (_event: GestureResponderEvent) => void
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <TouchableOpacity
      className="flex w-[fit-content] items-center justify-center rounded bg-blue-600 px-4 py-2"
      onPress={onClick}
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  )
}
