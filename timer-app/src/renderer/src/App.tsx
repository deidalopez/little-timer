import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Timer from './components/Timer'

function App(): JSX.Element {
  const [isOverlay, setIsOverlay] = useState(false)

  useEffect(() => {
    window.electron.ipcRenderer.on('overlay-mode', () => setIsOverlay((prevState) => !prevState))
    return window.electron.ipcRenderer.removeAllListeners('overlay-mode')
  }, [])

  return (
    <>
      <div className={isOverlay ? 'invisible' : 'visible'}>
        <TopBar></TopBar>
      </div>
      <div className="bg-black bg-opacity-40 rounded-xl pt-3">
        <Timer isOverlay={isOverlay} />
      </div>
    </>
  )
}

export default App
