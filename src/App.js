import React from 'react'
import Nav from "./components/nav/index.js"
import Body from "./components/home/index"
import Form from "./components/dates/index"
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
export default function App(){
  return (
    <Router>
      <div className = "App">
        <Nav />
        <Routes>
          <Route exact path = "/" element={<Body></Body>} />
          <Route exact path = "/Dates" element={<Form></Form>} ></Route>
        </Routes>
      </div>
    </Router>
  )
}

