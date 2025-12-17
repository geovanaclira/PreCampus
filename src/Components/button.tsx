interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <button
      className="h-11 w-full rounded-md bg-violet-600 text-white font-semibold
                 hover:bg-violet-700 transition"
    >
      {text}
    </button>
  )
}


