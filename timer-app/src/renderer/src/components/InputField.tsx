import React from 'react'

interface InputFieldProps {
  label: string
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder
}: InputFieldProps): JSX.Element {
  return (
    <div className="text-2xl">
      <label className="text-stone-200">{label}:</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-20 bg-transparent text-blue-500"
      ></input>
    </div>
  )
}
