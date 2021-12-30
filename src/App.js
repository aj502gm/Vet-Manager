import React from 'react'
import Nav from "./components/nav/index.js"
import Body from "./components/home/index"
import Form from "./components/dates/index"
import CheckDates from './components/newDates/index.js'
import User from './components/users/index.js'
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
export default function App(){
  return (
    <Router>
      <div className = "App">
        <Nav />
        <Routes>
          <Route exact path = "/" element={<Body></Body>} />
          <Route exact path = "/NewDate" element={<Form></Form>} ></Route>
          <Route exact path = "/Dates" element={<CheckDates></CheckDates>} ></Route>
          <Route exact path = "/Users" element={<User></User>} ></Route>
        </Routes>
      </div>
    </Router>
  )
}

