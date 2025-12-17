import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  value: string
  onChange: (value: string) => void
}

export function Input({
  label,
  value,
  onChange,
  type = "text",
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm text-zinc-700 font-medium">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-md border border-zinc-300 px-3
                   focus:outline-none focus:ring-2 focus:ring-violet-500"
        {...rest}
      />
    </div>
  )
}


