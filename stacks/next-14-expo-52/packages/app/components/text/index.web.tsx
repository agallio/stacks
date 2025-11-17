// Utils
import { cn } from '../../utils/helpers'

// Types
import type { TextProps } from './types'

export default function Text(props: TextProps) {
  const fontSize = props.customFontSize ? props.customFontSize : 'text-base'

  return (
    <p className={cn('text-black dark:text-white', fontSize, props.className)}>
      {props.children}
    </p>
  )
}
