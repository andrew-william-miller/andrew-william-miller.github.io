import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Skills />} />
          </Routes>
          <Footer />
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

      