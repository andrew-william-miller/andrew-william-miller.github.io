import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import ProjectData from './Data/projectOverview.json'
import Overview from './Components/Overview'
import ScrollToTop from './Components/ScrollToTop'
import Qualifications from './Components/Qualifications'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Skills />} />
        <Route path="*" element={<Skills />} />
        <Route path="/reactjs" element={<Overview qualificationImages={ProjectData["ReactJS"].qualificationImages} projectData={ProjectData["ReactJS"].projectData} primaryTechnology={"ReactJS"} />} />
        <Route path="/aspnet" element={<Overview qualificationImages={ProjectData["ASPNET"].qualificationImages} projectData={ProjectData["ASPNET"].projectData} primaryTechnology={"ASP.NET"} />} />
        <Route path="/reactnative" element={<Overview qualificationImages={ProjectData["React Native"].qualificationImages} projectData={ProjectData["React Native"].projectData} primaryTechnology={"React Native"} />} />
        <Route path="/php" element={<Overview qualificationImages={ProjectData["PHP"].qualificationImages} projectData={ProjectData["PHP"].projectData} primaryTechnology={"PHP"} />} />
        <Route path="/unity" element={<Overview qualificationImages={ProjectData["Unity"].qualificationImages} projectData={ProjectData["Unity"].projectData} primaryTechnology={"Unity"} />} />
        <Route path="/python" element={<Overview qualificationImages={ProjectData["Python"].qualificationImages} projectData={ProjectData["Python"].projectData} primaryTechnology={"Python"} />} />
        <Route path="/java" element={<Overview qualificationImages={ProjectData["Java"].qualificationImages} projectData={ProjectData["Java"].projectData} primaryTechnology={"Java"} />} />
        <Route path="/miscellaneous" element={<Overview qualificationImages={ProjectData["Miscellaneous"].qualificationImages} projectData={ProjectData["Miscellaneous"].projectData} primaryTechnology={"Miscellaneous"} />} />
        <Route path="/qualifications" element={<Qualifications />} />
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

