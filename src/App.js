import React from 'react'
import Nav from "./components/nav/index.js"
import Body from "./components/home/index"
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
export default function App(){
  return (
    <Router>
      <div className = "App">
        <Nav />
        <Routes>
          <Route exact path = "/" element={<Body></Body>} />
        </Routes>
      </div>
    </Router>
  )
}

