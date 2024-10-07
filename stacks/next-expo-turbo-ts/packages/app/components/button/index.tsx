import { TouchableOpacity } from 'react-native'

// Components
import Text from '../text'

// Utils
import { cn } from '../../utils/helpers'

// Types
import type { ButtonProps } from './types'

export default function Button({ text, className, onClick }: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(
        'flex w-[fit-content] items-center justify-center rounded bg-blue-600 px-4 py-2',
        className,
      )}
      onPress={onClick}
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  )
}
