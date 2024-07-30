import { useState } from 'react'
import TopBar from './components/TopBar'
import Timer from './components/Timer'

function App(): JSX.Element {
  const [isOverlay, setIsOverlay] = useState(false)

  return (
    <>
      <TopBar />
      <div className="bg-black bg-opacity-40 rounded-b-xl pt-3">
        <Timer />
      </div>
    </>
  )
}

export default App
