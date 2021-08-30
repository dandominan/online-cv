import React, { useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="App">

     <Route exact path="/" component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/contact" component={Contact}/>
     <Route path="/projects" component={Projects}/>
        
    </div>
    </Router>
  )
}

export default App
