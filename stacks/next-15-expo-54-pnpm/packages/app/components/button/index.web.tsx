// Utils
import { cn } from '../../utils/helpers'

// Types
import type { ButtonProps } from './types'

export default function Button({ text, className, onClick }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex w-[fit-content] items-center justify-center rounded bg-blue-600 px-4 py-2 text-white',
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
