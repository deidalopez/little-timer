import { useState } from 'react'
import TopBar from './components/TopBar'
import Timer from './components/Timer'

function App(): JSX.Element {
  const [isOverlay, setIsOverlay] = useState(false)

  return (
    <>
      <TopBar />
      <Timer />
    </>
  )
}

export default App
