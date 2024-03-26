import { type MouseEventHandler } from 'react'

export interface ButtonProps {
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="flex w-[fit-content] items-center justify-center rounded bg-blue-600 p-4 text-white"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
