import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pythagor } from './components/Pythagor'
import { Energy } from './components/Energy'
import { Volume } from './components/Volume'
import { Quadratic } from './components/Quadratic'
import { Sum } from './components/Sum'
import { Chemical } from './components/Chemical'
import { Log } from './components/Log'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ol>
         <Energy />
         <Pythagor />
         <Volume />
         <Quadratic />
         <Sum />
         <Chemical />
         <Log />
       </ol>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
