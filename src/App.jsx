import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'

function App() {

  return (
    <BrowserRouter>
          <Header />
          <Routes>
            
          </Routes>
    </BrowserRouter>

  )
}

export default App

/* 
          // <BrowserRouter>
          // <Routes>
          /*  {}/* <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> *///}
          // </Routes>
    //      {/* A footer could be rendered here */ }
      // </BrowserRouter>

      