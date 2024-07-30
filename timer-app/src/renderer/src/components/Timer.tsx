import React, { useState } from 'react'
import InputField from './InputField'

interface TimerProps {
  isOverlay: boolean
}

export default function Timer({ isOverlay }: TimerProps): JSX.Element {
  const [isEditing, setIsEditing] = useState(true)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)

  return (
    <div>
      {isEditing ? (
        // Time setup
        <div className="flex justify-center">
          <div>
            <InputField
              label="Hours"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
            />
            <InputField
              label="Minutes"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <InputField
              label="Seconds"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            <button
              className="text-slate-50 bg-blue-500 text-xl p-1 px-10 mt-2 rounded-sm font-semibold border-blue-500"
              onClick={() => setIsEditing(false)}
            >
              SAVE
            </button>
          </div>
        </div>
      ) : (
        // Timer
        <div></div>
      )}
    </div>
  )
}
