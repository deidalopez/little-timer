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
  const handleInputChange = (e): void => {
    // to prevent negative numbers
    const inputValue = e.target.value
    if (/^\d+$/.test(inputValue)) {
      onChange(e)
    }
  }
  return (
    <div className="text-2xl">
      <label className="text-stone-200">{label}:</label>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-20 bg-transparent text-blue-500"
      ></input>
    </div>
  )
}
