import React from 'react'

export default function TopBar(): JSX.Element {
  const handleClose = (): void => {
    window.electron.ipcRenderer.send('close-window')
  }
  const handleMin = (): void => {
    window.electron.ipcRenderer.send('minimize-window')
  }

  return (
    <div>
      <div
        className="bg-blue-400 w-screen h-8"
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
      >
        <div id="control-buttons" className="absolute top-0 right-0 text-stone-200 pe-2">
          <button id="minimize" className="p-1 text-lg" onClick={handleMin}>
            _
          </button>
          <button id="close" className="p-1 text-lg" onClick={handleClose}>
            &#x2715;
          </button>
        </div>
      </div>
    </div>
  )
}
