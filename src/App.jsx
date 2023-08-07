import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import ProjectData from './Data/projectOverview.json'
import Overview from './Components/Overview'

function App() {
  return (
    <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<Skills />} />
            <Route exact path="/reactjs" element={<Overview qualificationImages={ProjectData["ReactJS"].qualificationImages} projectData={ProjectData["ReactJS"].projectData} />} />
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

      