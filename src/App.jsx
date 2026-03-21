import CardContainer from './components/CardContainer'
import { useState } from 'react'
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <h1>Pokemon Memory Game</h1>
      <p>Score: {count}/3</p>
      <CardContainer count={count} setCount={setCount} />
    </div >
  )
}

export default App
