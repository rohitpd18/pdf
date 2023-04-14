import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Page/Home'
import SinglePdf from './Page/SinglePdf'
import Create from './Page/Create'
import Login from './Page/Login'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<SinglePdf/>}/>
        <Route path='/admin/create' element={<Create/>}/>
        <Route path='/admin/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App