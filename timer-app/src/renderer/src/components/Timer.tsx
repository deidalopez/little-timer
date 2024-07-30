import React, { useEffect, useState } from 'react'
import InputField from './InputField'

interface TimerProps {
  isOverlay: boolean
}

export default function Timer({ isOverlay }: TimerProps): JSX.Element {
  const [isEditing, setIsEditing] = useState(false)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let intervalId

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1)
        } else {
          if (minutes === 0 && hours === 0) {
            //audio

            clearInterval(intervalId)
            setIsActive(false)
          } else {
            if (minutes === 0) {
              setHours((hours) => hours - 1)
              setMinutes(59)
            } else {
              setMinutes((minutes) => minutes - 1)
            }
            setSeconds(59)
          }
        }
      }, 1000)
    } else {
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [isActive, hours, minutes, seconds])

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
        <div>
          <div className="flex justify-center">
            <h1 className="text-green-500 text-4xl">
              {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
            </h1>
          </div>
          <div
            id="timer-buttons"
            className="flex justify-center gap-5 bg-black bg-opacity-10 rounded-xl"
          >
            {isActive ? (
              <>
                <button
                  className="start text-green-500 text-5xl"
                  onClick={() => setIsActive(false)}
                >
                  &#x23F8;
                </button>
                <button className="text-yellow-300" onClick={() => setIsEditing(true)}>
                  &#9998;
                </button>
              </>
            ) : (
              <>
                <button className="start text-green-500 text-5xl" onClick={() => setIsActive(true)}>
                  &#9658;
                </button>
                <button className="text-yellow-300 text-5xl" onClick={() => setIsEditing(true)}>
                  &#9998;
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
