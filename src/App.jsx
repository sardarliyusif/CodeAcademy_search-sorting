import { useState } from 'react'
import './App.css'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Products/>
    </div>
  )
}

export default App
