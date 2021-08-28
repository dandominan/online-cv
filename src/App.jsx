import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import About from './components/About/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
        {/* <h1>Online CV</h1>
        <h2>Dan Dominan</h2> */}
        
        <About/>
        
    </div>
  )
}

export default App
