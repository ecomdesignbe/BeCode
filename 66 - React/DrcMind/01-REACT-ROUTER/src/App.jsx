import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link  } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navBar'>
        <Link to='/apropos'> Visitez A Propos</Link> |
        <Link to='/blog'> Visitez le blog</Link>
        
        

      </div>
    </>
  )
}

export default App