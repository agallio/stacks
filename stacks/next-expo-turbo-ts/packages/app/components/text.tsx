import { ComponentProps } from 'react'
import { Text as RNText } from 'react-native'

// Utils
import { cn } from '../utils/helpers'

type TextProps = ComponentProps<typeof RNText> & {
  customFontSize?: string
}

export function Text(props: TextProps) {
  return (
    <RNText
      {...props}
      className={cn(
        props.customFontSize ? props.customFontSize : 'text-base',
        props.className,
      )}
    />
  )
}
