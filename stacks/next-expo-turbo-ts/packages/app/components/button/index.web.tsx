import { type MouseEventHandler } from "react";

export interface ButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center bg-blue-600 rounded p-4 w-[fit-content] text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
